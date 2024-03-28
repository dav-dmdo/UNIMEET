import { collection, doc, deleteDoc, getDoc, getDocs, query, where, updateDoc } from 'firebase/firestore';
import { db } from '../../data/firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Selector } from '../../componets/Selector/Selector';
import useCategories from '../../controllers/Hooks/useCategories';
import styles from './EliminarCategoria.module.css';

export default function EliminarCategoria() {
  const categorias = useCategories();
  const [formData, setFormData] = useState({
    nombre: '',
    agrupaciones: [],
  });
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmit = async () => {
    try {
      const nombre = formData.nombre.trim().toLowerCase(); // Convert to lowercase
  
      if (!nombre) {
        console.error('Nombre de la Categoría is empty');
        return;
      }
  
      // Delete document from the 'categorias' collection
      const documentRef = doc(collection(db, 'categorias'), nombre);
      const docSnap = await getDoc(documentRef);
      if (docSnap.exists()) {
        await deleteDoc(documentRef);
        console.log('Document deleted successfully from "categorias":', nombre);
      } else {
        console.error('Document does not exist in "categorias":', nombre);
        return;
      }
  
      // Fetch documents from the 'agrupaciones' collection
      const agrupacionesQuery = query(collection(db, 'agrupaciones'));
      const agrupacionesSnapshot = await getDocs(agrupacionesQuery);
// Update each document in 'agrupaciones' to remove the deleted category from the concatenated string
await Promise.all(agrupacionesSnapshot.docs.map(async (doc) => {
  let categoria = doc.data().categoria || ''; // Handle the case where 'categoria' is undefined

  // Split the categoria string by ', '
  let categories = categoria.split(', ').map(item => item.trim());

  // Trim nombre
  const trimmedNombre = nombre.trim().toLowerCase(); // Normalize nombre

  // Filter out the deleted category
  categories = categories.filter(item => item.toLowerCase() !== trimmedNombre);

  // Join the remaining categories back into a single string
  let updatedCategoria = categories.join(', ');

  // Handle the case when the deleted category is the last one in the string
  if (categoria.toLowerCase().endsWith(trimmedNombre)) {
    updatedCategoria = categories.join(', '); // Reassign to avoid extra spaces
  }

  console.log('Document ID (agrupaciones):', doc.id);
  console.log('Old categoria (agrupaciones):', categoria);
  console.log('Updated categoria (agrupaciones):', updatedCategoria);

  // Update the document in Firestore with the updated categoria field
  await updateDoc(doc.ref, { categoria: updatedCategoria });
  console.log(`Categoria removed from document ${doc.id} in "agrupaciones"`);
}));



  
      // Clear the form data
      setFormData({ nombre: '', agrupaciones: [] });
  
      // Navigate to the desired route after successful deletion
      navigate("/Categorias");
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };
  
  
  return (
    <div className={styles.mainBox}>
      <div className={styles.circle}>
        <div className={styles.info}>
          <h1 className={styles.title}>Eliminar Categoría</h1>
          <div className={styles.selectContainer}>
            <div className={styles.myDiv + ' ' + styles.selectContainer}>
              <label htmlFor="categorias">
                <span className={styles.text}>Escoge la categoría a eliminar</span>
              </label>
              <Selector
                className={styles.bigSelect}
                label=""
                options={categorias}
                changeValue={(event) => {
                  handleOnChange({
                    target: { name: 'nombre', value: event.target.value },
                  });
                }}
              />
            </div>
          </div>
          <button type="submit" className={styles.submitBtn} onClick={onSubmit}>
            Eliminar categoría
          </button>
        </div>
      </div>
    </div>
  );
}
