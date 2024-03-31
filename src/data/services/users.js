import {db} from "../firebase/index"
import { collection, doc, getDoc, getDocs, query, setDoc, where, updateDoc } from "firebase/firestore"

export async function createUserProfile(userId, data){
    return setDoc(doc(db, "users",userId), data);
} 

export async function getUserProfile(email){
    const userQuery = query(collection(db, "users"), where("email","==",email));

    const result = await getDocs(userQuery);

    if (result.size > 0){
        const users = result.docs.map((item) =>({
            ...item.data(),
            id: item.id,
        }));
        return users[0];
    } else {
        return null;
    }
}


export async function updateUserGroup (uid, agrupaciones){
    const documentoRef = doc(collection(db, 'users'), uid);
    const documento = await getDoc(documentoRef);
    console.log(agrupaciones)
    if (!documento.exists) {
      throw new Error('El documento no existe.');
    }

    else{
        const data = { agrupaciones };
        await updateDoc(documentoRef, data);
    }

}

export async function getUserAdmin (uid){
    const documentoRef = doc(collection(db, 'users'), uid);
    const documento = await getDoc(documentoRef);
    
    if (!documento.exists) {
      throw new Error('El documento no existe.');
    }

    else{
        if (documento.data().isAdmin === true){
            return true
        }
        else{
            return false
        }
    }
}