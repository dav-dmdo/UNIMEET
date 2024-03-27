import { Selector } from "../../componets/Selector/Selector";
import useCategories from "../../controllers/Hooks/useCategories";
import { useState } from "react";
import styles from "./AgregarCategoria.module.css";
import useGroups from "../../controllers/Hooks/useGroups";
import { db } from "../../data/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";


/*TODO - MAKE THE SELECTOR MULTIPLE CHOICE!*/
export default function AgregarCategoria() {
    const agrupaciones = useGroups();
    const categories =useCategories();
    const [formData, setFormData] = useState({
        nombre: '',
        agrupaciones: [],
      });
     
      const handleOnChange = (event) => {
        const { name, value, type } = event.target;
      
        // If the input type is a checkbox, handle multiple values
        if (type === 'checkbox') {
          const checkedValues = formData[name] || []; // Get the existing values or start with an empty array
          const updatedValues = event.target.checked
            ? [...checkedValues, value] // Add the new value to the array if checked
            : checkedValues.filter(val => val !== value); // Remove the value from the array if unchecked
      
          setFormData({
            ...formData,
            [name]: updatedValues,
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };
      const onSubmit = async () => {
        console.log('saving the info!');
      
        try {
          const { nombre, agrupaciones, ...extraData } = formData;
      
          const element = {
            name: nombre,
            agrupaciones: Array.isArray(agrupaciones) ? agrupaciones : [agrupaciones], // Always store agrupaciones as an array
            ...extraData,
          };
      
          const docRef = doc(collection(db, 'categorias'), element.name);
          await setDoc(docRef, element);
      
          console.log('Element added successfully with ID:', docRef.id);
        } catch (error) {
          console.error('Error adding element:', error);
        }
      };

        
  return (
    <div className={styles.mainBox}>
        <div className={styles.circle}>
            <div className={styles.info}>
                <h1 className={styles.title}>
                    Agregar Categoría
                </h1>
                {/*SECTION -  NAME*/}
          <div className={styles.inputContainer}>
            <label htmlFor="nameType">
            <span>Nombre de la Categoría</span>
          </label>
          <input
            type="text"
            name="nombre"
            id="NewCategoria"
            placeholder="Ex. Literatura"
            onChange={handleOnChange}
          
          />
          </div>
          <div className={styles.myDiv + " " + styles.selectContainer}>
          <label htmlFor="groupSelector">
            <span className={styles.text}>Escoge las agrupaciones</span>
          </label>
          <Selector
             className={styles.bigSelect}
             label=""
             options={agrupaciones}
             changeValue={(event) => {
               handleOnChange({
                target: { name: "agrupaciones", value: event.target.value },
               });
             }}
            />
        </div>
        <button type="submit" className={styles.submitBtn} onClick={onSubmit}  >
          Agregar categoría
        </button>
            </div>
        </div>
    </div>
    
  )
}
