import { createContext } from "react";
import { useUser } from "../hooks/useUser";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { user, userIsLoading } = useUser();

  return (
    <UserContext.Provider value={{ user, userIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};
