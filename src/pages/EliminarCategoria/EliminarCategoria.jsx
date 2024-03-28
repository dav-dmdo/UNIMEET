import React, { useState } from 'react';
import { collection, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../../data/firebase';
import styles from './EliminarCategoria.module.css';
import { Selector } from '../../componets/Selector/Selector';
import useCategories from '../../controllers/Hooks/useCategories';
import { useNavigate } from 'react-router-dom';

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

      const documentRef = doc(collection(db, 'categorias'), nombre);

      // Check if the document exists before attempting to delete it
      const docSnap = await getDoc(documentRef);
      if (!docSnap.exists()) {
        console.error('Document does not exist:', nombre);
        return;
      }

      await deleteDoc(documentRef);

      console.log('Document deleted successfully:', nombre);
      setFormData({ nombre: '', agrupaciones: [] });
      navigate("/Categorias")
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
            <div className={styles.myDiv + " " + styles.selectContainer}>
              <label htmlFor="categorias">
                <span className={styles.text}>Escoge la categoría a eliminar</span>
              </label>
              <Selector
                className={styles.bigSelect}
                label=""
                options={categorias}
                changeValue={(event) => {
                  handleOnChange({
                    target: { name: "nombre", value: event.target.value },
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
