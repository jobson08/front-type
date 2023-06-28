import axios from "axios";
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { config } from "process";

interface IRequestConfig extends AxiosRequestConfig {
   onFailure?: (error: AxiosError) => void;
   onSuccess?: (Response: AxiosResponse) => void;
}

 const httpClient = Axios.create({
    baseURL: "http://localhost:4000",
});
const refreshSubscribers: Array<(token: string) => void > = [];

let failedRequest: Array<IRequestConfig> = [];

httpClient.interceptors.request.use((config) =>{
   const token = localStorage.getItem('token:system-finance');

   if (token) {
      config.headers.Authorization = `Berer ${token}`;
   }
   return config;
});
httpClient.interceptors.response.use(
   (response) => response,
   async (error: AxiosError | unknown) =>{
      const originalRequest = (error as AxiosError).config as IRequestConfig;
      if ( error instanceof AxiosError && error.response?.status === 401) {
         if(
            error.response?.data && 
            error.response?.data.code === 'token.expired'
         ){
            try {
            const refresh = localStorage.getItem('refresh_token:system-finance');
            const response = httpClient.post('/refresh', {
               refresh_token: refresh,
            });
            const { token, refresh_token } = (await response).data;
            localStorage.setItem('token:system-finance', token)
            localStorage.setItem('refresh_token:system-finance', refresh_token)

            onRefreshed(token);

            if(originalRequest?.headers){
               originalRequest.headers.Authorization = `Beare ${token}`
            }
               return axios(originalRequest)
            } catch (error) {
               failedRequest.forEach((request)=>{
                  request.onFailure?.(error as AxiosError)
               });
               failedRequest = []
            }
         }
      }else {
         localStorage.removeItem('token:system-finance');
            localStorage.removeItem('refresh_token:system-finance');
            localStorage.removeItem('user:system-finance');
      }
      return Promise.reject(error);
   },
);

function onRefreshed(token: string){
   refreshSubscribers.forEach((callback) => callback(token));
}
export {httpClient}