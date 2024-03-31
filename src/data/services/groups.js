import { db } from "../firebase/index";
import { collection, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

export const addCommentToGroup = async (groupName, currentUser, comment) => {
    try {
        console.log("Nombre del grupo: ", groupName);
        console.log("nombre del usuario: ", currentUser);
        const groupCollection = collection(db, 'agrupaciones');

        const groupDocRef = doc(groupCollection, groupName);

        const groupDoc = await getDoc(groupDocRef);

        if (groupDoc.exists()) {
            const currentDate = new Date().toISOString().slice(0, 10);

            await updateDoc(groupDocRef, {
                comments: arrayUnion({
                    user: currentUser,
                    comment: comment,
                    date: currentDate,
                }),
            });

            console.log('Comentario agregado correctamente');
        } else {
            console.log('La agrupación no existe');
        }
    } catch (error) {
        console.error('Error al agregar el comentario:', error);
    }
};

export default addCommentToGroup;