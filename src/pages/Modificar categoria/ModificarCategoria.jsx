import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Selector } from "../../componets/Selector/Selector";
import useCategories from "../../controllers/Hooks/useCategories";
import styles from "./ModificarCategoria.module.css";
import useGroups from "../../controllers/Hooks/useGroups";
import {
  updateDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../data/firebase";
import { MultipleSelector } from "../../componets/Selector/MultipleSelector";

export default function ModificarCategoria() {
  const categorias = useCategories();
  const agrupaciones = useGroups(); // Fetch agrupaciones data
  const [selectedCategory, setSelectedCategory] = useState(""); // State to store selected category
  const [selectedAgrupaciones, setSelectedAgrupaciones] = useState([]); // State to store selected agrupaciones
  const [modifiedCategoryName, setModifiedCategoryName] = useState(""); // State to store modified category name
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedAgrupaciones([]); // Reset selected agrupaciones when category changes
  };

  const handleSubmit = async () => {
    try {
      if (!selectedCategory) {
        throw new Error("Please select a category.");
      }

      // Find category document by name
      const categorySnapshot = await getDocs(collection(db, "categorias"));
      const categoryDoc = categorySnapshot.docs.find(
        (doc) =>
          doc.data().nombre.toLowerCase() === selectedCategory.toLowerCase()
      );
      if (!categoryDoc) {
        throw new Error(
          `Category document with name ${selectedCategory} doesn't exist.`
        );
      }
      const categoryName = categoryDoc.data().nombre; // Get the name of the category document

      // Update category document in Firestore
      const categoryDocRef = doc(db, "categorias", categoryDoc.id);
      await updateDoc(categoryDocRef, { nombre: modifiedCategoryName }); // Update category name
      console.log("Category name updated successfully.");

      for (const agrupacion of selectedAgrupaciones) {
        const agrupacionQuery = query(
          collection(db, "agrupaciones"),
          where("nombre", "==", agrupacion)
        );
        // Query all agrupaciones

        const agrupacionesSnapshot = await getDocs(
          collection(db, "agrupaciones")
        );

        agrupacionesSnapshot.forEach(async (agrupacionDoc) => {
          const agrupacionData = agrupacionDoc.data();
          let currentCategoria = agrupacionData.categoria
            ? agrupacionData.categoria
            : ""; // Check if categoria field exists

          // Normalize case for comparison
          const selectedCategoryLower = selectedCategory.toLowerCase();
          const modifiedCategoryNameLower = modifiedCategoryName.toLowerCase();

          // Remove occurrences of the modified category (old name) from the array
          let currentCategoriesArray = currentCategoria
            .split(", ")
            .map((category) => category.toLowerCase());
          currentCategoriesArray = currentCategoriesArray.filter(
            (category) => category !== selectedCategoryLower
          );

          // If this agrupacion is selected, add the modified category (new name)
          if (selectedAgrupaciones.includes(agrupacionData.nombre)) {
            // Add the modified category (new name) if it's not already present
            if (!currentCategoriesArray.includes(modifiedCategoryNameLower)) {
              currentCategoriesArray.push(modifiedCategoryNameLower);
            }
          }

          // Join the remaining categories back into a string
          const updatedCategoria = currentCategoriesArray.join(", ");

          // Update agrupacion's categoria field
          await updateDoc(agrupacionDoc.ref, { categoria: updatedCategoria });

          console.log(`Agrupacion ${agrupacionDoc.id} updated successfully.`);
        });
      }

      // Update documents in the "categorias" collection to reflect changes in agrupaciones
      await updateDoc(categoryDocRef, { agrupaciones: selectedAgrupaciones });

      // Navigate to the desired route after successful modification

      navigate("/agrupaciones");
    } catch (error) {
      console.error("Error updating category and agrupaciones:", error);
    }
  };

  return (
    <div className={styles.mainBox}>
      <div className={styles.circle}>
        <div className={styles.info}>
          <h1 className={styles.title}>Modificar Categoría</h1>
          <div className={styles.selectContainer}>
            <div className={styles.myDiv + " " + styles.selectContainer}>
              <label htmlFor="categorias">
                <span className={styles.text}>
                  Escoge la categoría a modificar
                </span>
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
                options={agrupaciones.filter(
                  (agrupacion) => agrupacion.categoria === selectedCategory
                )}
                selectedOptions={selectedAgrupaciones}
                onSelect={setSelectedAgrupaciones}
              />
            </div>
          )}
          <button
            type="button"
            className={styles.submitBtn}
            onClick={handleSubmit}
          >
            Modificar categoría
          </button>
        </div>
      </div>
    </div>
  );
}
