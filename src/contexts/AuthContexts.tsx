import { isAxiosError } from "axios";
import { httpClient } from "data/server/httpClient";
import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";

interface IAuthProvider {
    children: ReactNode;
}

interface IAuthContextData {
    signIn: ({ email, password }: ISignIn) => void;
}

interface ISignIn {
    email: string,
    password: string;
}

const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({children }:IAuthProvider) {
    async function signIn({ email, password}: ISignIn) {
        try {
            const {data} = await httpClient.post('/user/auth', {
                email,
                password,
            });
            const { token, refresh_token, user} = data;
            const userData ={
                name: user.name,
                email: user.email,
                avatar_url: user.avater_url,
            } ;

            localStorage.setItem('token:system-finance', token);
            localStorage.setItem('refresh_token:system-finance', refresh_token);
            localStorage.setItem('user:system-finance', JSON.stringify(userData));
            return data;
        } catch (error) {
            console.log(error);
            if (isAxiosError(error)){
                toast.error(error.response?.data.message); 
            }else{
                toast.error('Login não realizado tentenovamente')
            }
        }
    }
    return (
        <AuthContext.Provider value={{signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }