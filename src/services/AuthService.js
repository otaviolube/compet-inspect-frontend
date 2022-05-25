import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import api from "./ApiService";

export const TOKEN_KEY = "@compet-inspect-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => {
    localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export async function LoginRequest(email, password){
    try{
        return await api.post("login", {email, password}); 
    }catch(error){
        return null;
    }
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

export function setUserLocalStorage(user){
    localStorage.setItem(TOKEN_KEY, JSON.stringify(user));
}

export function getUserLocalStorage(){
    const json = localStorage.getItem(TOKEN_KEY);

    if(!json){
        return null;
    }else{
        const user = JSON.parse(json);
        return user ?? null;
    }
}