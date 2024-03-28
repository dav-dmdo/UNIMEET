import React, { useState } from 'react';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../data/firebase';
import styles from './AgregarCategoria.module.css';
import { MultipleSelector } from '../../componets/Selector/MultipleSelector';
import { useNavigate } from 'react-router-dom';

export default function AgregarCategoria() {
  const [formData, setFormData] = useState({
    nombre: '',
    agrupaciones: [],
  });

  const navigate = useNavigate();

  const handleSelect = (selectedOptions) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      agrupaciones: selectedOptions
    }));
  };
  const onSubmit = async () => {
    try {
      const nombre = formData.nombre.trim(); // Remove leading and trailing whitespace
      if (!nombre) {
        console.error('Nombre de la Categoría is empty');
        return;
      }
      const customId = nombre.toLowerCase().replace(/\s+/g, '-');
      const data = {
        nombre: formData.nombre,
        agrupaciones: formData.agrupaciones,
      };
  
      const categoriasCollectionRef = collection(db, 'categorias');
      const documentRef = doc(categoriasCollectionRef, customId);
  
      await setDoc(documentRef, data);
  
      console.log('Data saved successfully with custom ID:', customId);
      navigate('/Categorias')
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  

  return (
    <div className={styles.mainBox}>
      <div className={styles.circle}>
        <div className={styles.info}>
          <h1 className={styles.title}>Agregar Categoría</h1>
          <div className={styles.inputContainer}>
            <label htmlFor="nameType">
              <span>Nombre de la Categoría</span>
            </label>
            <input
              type="text"
              name="nombre"
              id="NewCategoria"
              placeholder="Ex. Literatura"
              value={formData.nombre}
              onChange={(e) => setFormData((prevFormData) => ({ ...prevFormData, nombre: e.target.value }))}
            />
          </div>
          <div className={styles.selectContainer}>
            <label htmlFor="chekcbox">
              <span className={styles.text}>Escoge las agrupaciones</span>
            </label>
            <MultipleSelector onSelect={handleSelect} />
          </div>
          <button type="submit" className={styles.submitBtn} onClick={onSubmit}>
            Agregar categoría
          </button>
        </div>
      </div>
    </div>
  );
}
