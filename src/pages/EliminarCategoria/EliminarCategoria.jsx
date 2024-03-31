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
  
      // Query documents from the 'categorias' collection where 'nombre' matches
      const categoriasQuery = query(collection(db, 'categorias'), where('nombre', '==', nombre));
      const categoriasSnapshot = await getDocs(categoriasQuery);
  
      if (!categoriasSnapshot.empty) {
        // If there are matching documents, delete them
        await Promise.all(categoriasSnapshot.docs.map(async (doc) => {
          await deleteDoc(doc.ref);
          console.log('Document deleted successfully from "categorias":', doc.id);
        }));
  
        console.log('Documents deleted successfully from "categorias"');
      } else {
        console.error('Document does not exist in "categorias":', nombre);
        return;
      }
  
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

