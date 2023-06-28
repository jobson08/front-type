import { useContext } from 'react';
import { AuthContext } from "contexts/AuthContexts";

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('userAuth nas encontrodo no AuthProvider');
    }
    return context;
}