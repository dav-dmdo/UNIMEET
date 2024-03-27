import { createContext } from "react";
import { useUser } from "../hooks/useUser";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = useUser();

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
