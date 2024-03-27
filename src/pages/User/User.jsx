import styles from "./User.module.css";
import 'firebase/firestore';
import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

export default function User() {

  //TODO - put the useState original image with a link directly using the firebase image data
  const [imagePreview, setImagePreview] = useState('./src/assets/userPage.png');

  const handleFileUpload = (event) => {
   
    const file = event.target.files[0];
    const reader = new FileReader();

    // Read the file as a data URL
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (event) => {
  console.log('saving the info!');
  };
  
    {/*TODO - Conect to functional buttons*/}
  return (

    <div className={styles.userCard}>
        <div className={styles.leftside}>
        <img className={styles.image} src={imagePreview} alt="" />
        <div>
        <label htmlFor="upload-btn" className={styles.uploadButton}>
          Cambiar imágen
        </label>
        <input type="file" id="upload-btn" onChange={handleFileUpload} accept="image/*" hidden />
      </div>
        <div className={styles.textName}>
            {/*//TODO - Put the name from the user*/}
            <p>Nombre del Usuario</p>
            
        </div>
        <button type="submit" className={styles.submitBtn} onClick={onSubmit}  >
          Guardar cambios
        </button>
        </div>
       
        <div className={styles.rightside}>
        <div className={styles.titles}>
            <h1>Datos Personales</h1>
        </div>
        <div className={styles.text}>
          {/*SECTION -  NAME*/}
          <div className={styles.inputContainer}>
            <label htmlFor="name">
            <span>Nombre</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ex. Andrea Linares"
          
          />
          </div>

            {/*SECTION -  EMAIL*/}
            <div className={styles.inputContainer}>
            <label htmlFor="email">
            <span>Correo electrónico*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Ex. linares.andrea@correo.unimet.edu.ve"
          
          />
          </div>

          {/*SECTION -  TELEFONO*/}
          <div className={styles.inputContainer}>
          <label htmlFor="phoneNum">
            <span>Número de Teléfono</span>
          </label>
          <input
            type="number"
            name="phoneNum"
            id="phoneNum"
            placeholder="Ex. 04121122345"
            
          />
          </div>

          {/*SECTION -  CARRERA*/}
          <div className={styles.inputContainer}>
          <label htmlFor="carrera">
            <span>Carrera</span>
          </label>
          <input
            type="text"
            name="carrera"
            id="carrera"
            placeholder="Ex. Ingeniería Eléctrica"
            
          />
          </div>

          {/*SECTION CARNET */}
          <div className={styles.inputContainer}>
          <label htmlFor="carnet">
            <span>Carnet</span>
          </label>
          <input
            type="number"
            name="carnet"
            id="carnet"
            placeholder="Ex. 202221110405"
            
          />
          </div>
        </div>
        </div>
    </div>
  )
}
