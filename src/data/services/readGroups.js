import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export async function getGroups(){
    const groupsCollection =collection(db, 'agrupaciones');
    const groupDocs = await getDocs(groupsCollection);
    const groups= groupDocs.docs.map((doc) => doc.data());
    return groups;
}