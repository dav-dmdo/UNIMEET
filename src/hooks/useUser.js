import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../data/firebase";

export const useUser = () => {
    const [user, setUser] = useState(null);

    console.log("user state" + user);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user !== null ? "User logged in " + user.email : "User logged out");
            setUser(user);
        });
    }, [])
    console.log("user state" + user);
    return user;

}
