import * as React from 'react';
import { useAuth } from "../services/AuthService";

export const ProtectedLayout = ({ children }) => {
    const auth = useAuth();
    
    if(!auth.email){
        return <h1>Você precisa estar autenticado para acessar essa rota!</h1>
    }

    return children;
}