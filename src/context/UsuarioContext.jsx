import React, {useContext, createContext, useEffect, useState} from "react";
import {auth}  from "../data/firebase/index"
import {onAuthStateChanged} from "firebase/auth"
import { getUserProfile } from "../data/services/users";

export const UsuarioContext = createContext(null)

export function UsuarioContextProvider({children}){
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser){
                const profile = await getUserProfile(firebaseUser.email)
                setUser(profile);
            } else{
                setUser(null);
            }
        });
    }, []);

    return (
    <UsuarioContext.Provider 
    value={{
        user,
        }}
        >
        {children}
    </UsuarioContext.Provider>
    );
}

export function useUsuario(){
    return useContext(UsuarioContext)
}