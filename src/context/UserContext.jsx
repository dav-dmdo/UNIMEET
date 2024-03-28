import { createContext } from "react";
import { useUser } from "../hooks/useUser";
import { auth } from "../data/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user, userIsLoading } = useUser();
  signInWithEmailAndPassword(auth, "david@gmail.com", 1234567890)
  

  return (
    <UserContext.Provider value={{ user, userIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};
