import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../data/firebase";

export const useUser = () => {
    const [user, setUser] = useState(null);
    const [userIsLoading, setUserIsLoading] = useState(true);

    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user !== null ? "User logged in " + user.email : "User logged out");
            setUser(user);
            setUserIsLoading(false);
        });
    }, [])
    return { user, userIsLoading};

}
