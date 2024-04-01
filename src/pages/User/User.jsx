import styles from "./User.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

import { db, storage } from "../../data/firebase";
import { collection, getDocs, query, where, updateDoc, doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export default function User() {
  const { user, userIsLoading } = useUser();
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNum: "",
    carrera: "",
    carnet: ""
  });

  useEffect(() => {
    if (!userIsLoading && user.email) {
      setUserData({
        name: user.name || "",
        email: user.email || "",
        phoneNum: user.phoneNum || "",
        carrera: user.carrera || "",
        carnet: user.carnet || ""
      });
    }
  }, [user, userIsLoading]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const updateUser = async (file) => {
    try {
      const timestamp = new Date().getTime();
      const imageName = file.name;
      const imageId = timestamp + '_' + imageName;
      const storageRef = ref(storage, `user_images/${user.email}/${imageId}`);
      await uploadBytes(storageRef, file, { contentType: 'image/png' });
      const imageURL = await getDownloadURL(storageRef);
      const userDocRef = doc(db, "users", user.uid);
      
      // Check if the user document exists
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        // If the user document exists, update it
        await updateDoc(userDocRef, {
          name: userData.name,
          email: userData.email,
          phoneNum: userData.phoneNum,
          carrera: userData.carrera,
          carnet: userData.carnet,
          imageURL: imageURL // Set imageURL field here
        });
      } else {
        // If the user document does not exist, create it
        await setDoc(userDocRef, {
          name: userData.name,
          email: userData.email,
          phoneNum: userData.phoneNum,
          carrera: userData.carrera,
          carnet: userData.carnet,
          imageURL: imageURL // Set imageURL field here
        });
      }
      
      console.log("Image uploaded successfully and user data updated!");
    } catch (error) {
      console.error("Error updating user information:", error);
    }
  };
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file); // Log the selected file object
    if (file && file.type === "image/png") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      console.log("Image type:", file.type); // Log the image type
      updateUser(file); // Call updateUser and pass 'file' as a parameter
    } else {
      alert("Please select a PNG file.");
      event.target.value = null;
    }
  }

  if (userIsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.userCard}>
      <div className={styles.leftside}>
        <img
          className={styles.image}
          src={imagePreview ? imagePreview : "./src/assets/userPage.png"}
          alt=""
        />
        <div>
          <label htmlFor="upload-btn" className={styles.uploadButton}>
            Cambiar imágen
          </label>
          <input
            type="file"
            id="upload-btn"
            onChange={handleFileUpload}
            accept="image/png" // Accept only PNG files
            hidden
          />
        </div>
        <button
          type="button"
          className={styles.submitBtn}
          onClick={() =>{
            updateUser
            navigate("/UserPage")
          }}
        >
          Guardar cambios
        </button>
      </div>

      <div className={styles.rightside}>
        <div className={styles.titles}>
          <h1>Datos Personales</h1>
        </div>
        <div className={styles.text}>
          <div className={styles.inputContainer}>
            <label htmlFor="name">
              <span>Nombre</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Ex. Andrea Linares"
              value={userData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.inputContainer}>
          <label htmlFor="email">
              <span>Correo electrónico*</span>
            </label>
          <div className={styles.information}>
            
              <p className={styles.txt}>{userData.email}</p>
            
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="phoneNum">
              <span>Número de Teléfono</span>
            </label>
            <input
              type="number"
              name="phoneNum"
              id="phoneNum"
              placeholder="Ex. 04121122345"
              value={userData.phoneNum}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="carrera">
              <span>Carrera</span>
            </label>
            <input
              type="text"
              name="carrera"
              id="carrera"
              placeholder="Ex. Ingeniería Eléctrica"
              value={userData.carrera}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="carnet">
              <span>Carnet</span>
            </label>
            <input
              type="number"
              name="carnet"
              id="carnet"
              placeholder="Ex. 202221110405"
              value={userData.carnet}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
