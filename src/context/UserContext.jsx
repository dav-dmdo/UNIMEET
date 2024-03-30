 import { createContext, useState } from "react";
 import { useUser } from "../hooks/useUser";
 import { auth } from "../data/firebase";
 import { signInWithEmailAndPassword } from "firebase/auth";

 export const UserContext = createContext();

 export const UserProvider = ({ children }) => {
   const { user, userIsLoading } = useUser();
   signInWithEmailAndPassword(auth, "david@gmail.com", 1234567890);

   const auxGroup = {
     categoria: "Otras",
     descripcion:
       "Asociación de Rescate y Condicionamiento Animal. ARCA Unimet es un centro terapéutico con el objetivo de reducir el número de animales abandonados.",
     img: "https://firebasestorage.googleapis.com/v0/b/unimeet-is.appspot.com/o/ARCA%20Unimet.png?alt=media&token=81edc8d1-a5ce-4d26-b9f0-99b06f0a4392",
     instagram: "@arcaunimet",
     mision:
       "ARCA Unimet es una agrupación que incentiva la adopción de mascotas, especialmente perros adultos, la esterilización de las mismas y el buen trato animal, mediante actividades de carácter educativo enfocadas en estos principios. Asimismo, la interacción con nuestros perros, tanto dentro como fuera de la sede, forman parte vital de dicho proceso. Nuestra labor va dirigida a niños y jóvenes principalmente que hagan vida dentro de la comunidad unimetana, como a instituciones educativas afines a la Universidad Metropolitana.",
     nombre: "Arca Unimet",
     ubicacion: "Caracas, Venezuela",
     vision:
       "Ser una agrupación capaz de fomentar la buena interacción entre las personas y los animales, la tenencia responsable de mascotas. Por otra parte, uno de nuestros objetivos a largo plazo es establecernos como un servicio comunitario propio enfocado en incentivar el buen trato animal mediante actividades de carácter educativo.",
     year: "2016",
   };

   const [groupToShow, setGroupToShow] = useState(auxGroup);

   return (
     <UserContext.Provider
       value={{ user, userIsLoading, groupToShow, setGroupToShow }}
     >
       {children}
     </UserContext.Provider>
   );
 };
