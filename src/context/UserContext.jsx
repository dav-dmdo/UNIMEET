 import { createContext, useState } from "react";
 import { useUser } from "../hooks/useUser";

 export const UserContext = createContext();

 export const UserProvider = ({ children }) => {
   const { user, userIsLoading } = useUser();

   const [groupToShow, setGroupToShow] = useState({});

   return (
     <UserContext.Provider
       value={{ user, userIsLoading, groupToShow, setGroupToShow }}
     >
       {children}
     </UserContext.Provider>
   );
 };
