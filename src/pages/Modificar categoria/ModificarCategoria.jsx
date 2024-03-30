import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Selector } from '../../componets/Selector/Selector';
import useCategories from '../../controllers/Hooks/useCategories';
import styles from './ModificarCategoria.module.css';
import useGroups from '../../controllers/Hooks/useGroups';
import { updateDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../data/firebase';
import { MultipleSelector } from '../../componets/Selector/MultipleSelector';

export default function ModificarCategoria() {
  const categorias = useCategories();
  const agrupaciones = useGroups(); // Fetch agrupaciones data
  const [selectedCategory, setSelectedCategory] = useState(''); // State to store selected category
  const [selectedAgrupaciones, setSelectedAgrupaciones] = useState([]); // State to store selected agrupaciones
  const [modifiedCategoryName, setModifiedCategoryName] = useState(''); // State to store modified category name
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedAgrupaciones([]); // Reset selected agrupaciones when category changes
  };

  const handleSubmit = async () => {
    try {
      if (!selectedCategory) {
        throw new Error('Please select a category.');
      }

      // Update category document in Firestore
      const categoryDocRef = doc(db, 'categorias', selectedCategory);
      await updateDoc(categoryDocRef, { nombre: modifiedCategoryName });
      console.log('Category name updated successfully.');

      // Update documents in the "agrupaciones" collection

      // For each selected agrupacion, update its categoria field
      selectedAgrupaciones.forEach(async (agrupacionId) => {
        const agrupacionDocRef = doc(db, 'agrupaciones', agrupacionId);
        await updateDoc(agrupacionDocRef, { categoria: modifiedCategoryName });
        console.log(`Agrupacion ${agrupacionId} updated successfully.`);
      });

      // Navigate to the desired route after successful modification
      navigate('/agrupaciones');
    } catch (error) {
      console.error('Error updating category and agrupaciones:', error);
    }
  };

  return (
    <div className={styles.mainBox}>
      <div className={styles.circle}>
        <div className={styles.info}>
          <h1 className={styles.title}>Modificar Categoría</h1>
          <div className={styles.selectContainer}>
            <div className={styles.myDiv + ' ' + styles.selectContainer}>
              <label htmlFor="categorias">
                <span className={styles.text}>Escoge la categoría a modificar</span>
              </label>
              <Selector
                className={styles.bigSelect}
                label=""
                options={categorias}
                value={selectedCategory}
                changeValue={handleCategoryChange}
              />
            </div>
          </div>
          {selectedCategory && (
            <div className={styles.selectContainer}>
              <input
                type="text"
                value={modifiedCategoryName}
                onChange={(e) => setModifiedCategoryName(e.target.value)}
                placeholder="Nuevo nombre de categoría"
              />
              <span className={styles.text}>Agrupaciones disponibles</span>
              {/* Use the MultipleSelector component */}
              <MultipleSelector
                options={agrupaciones.filter((agrupacion) => agrupacion.categoria === selectedCategory)}
                selectedOptions={selectedAgrupaciones}
                onSelect={setSelectedAgrupaciones}
              />
            </div>
          )}
          <button type="button" className={styles.submitBtn} onClick={handleSubmit}>
            Modificar categoría
          </button>
        </div>
      </div>
    </div>
  );
}
