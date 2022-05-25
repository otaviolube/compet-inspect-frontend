import { createContext, useEffect, useState } from "react";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "../services/AuthService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const user = getUserLocalStorage();

        if(user){
            setUser(user);
        }
        
    }, []);

    async function authenticate(email, password){
        const response = await LoginRequest(email, password);

        console.log("Resposta", response)

        const payload = {
            token: response.data.token,
            email: email
        }

        setUser(payload);
        setUserLocalStorage(payload);
    }

    async function logout(){
        setUser(null);
        setUserLocalStorage(null);
    }

    return(
        <AuthContext.Provider value={{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )
}