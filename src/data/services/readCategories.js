import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export async function getCategories(){
    const categoriesCollection =collection(db, 'categorias');
    const categoriesDocs = await getDocs(categoriesCollection);
    const categories= categoriesDocs.docs.map((doc) => doc.data());
    return categories;
}
