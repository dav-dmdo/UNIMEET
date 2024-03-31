import { signInWithPopup, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { auth, googleProvider } from "../firebase/index"
import { createUserProfile } from "../services/users"

export const singInWithGoogle = async () => {

    try {
        const result = await signInWithPopup(auth, googleProvider);
        
        
        if(result.user.email.includes("unimet.edu.ve")==true){
            await createUserProfile(result.user.uid, { email: result.user.email, name: result.user.displayName, agrupaciones: [] })
        }else{
            alert("Debe tener un correo de estudiante de la Universidad")
            await logout();
            

        }
        
    } catch (error) {
        console.log(error)

    }
}

export const registerWithEmailAndPassword = async (email, password, extraData) => {
    try {
        const result = await createUserWithEmailAndPassword(auth, email, password)
        await createUserProfile(result.user.uid, {
            email,
            ...extraData,
        })
    } catch (error) {
        console.log(error)

    }
};

export const loginWithEmailAndPassword = async (email, password) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error)
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.log(error)
    }
};
