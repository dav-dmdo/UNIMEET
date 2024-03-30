import React, { useState } from 'react'
import styles from "./IniciarSesion.module.css"
import { Link, useNavigate } from "react-router-dom";
import { loginWithEmailAndPassword , singInWithGoogle} from "../../data/services/auth";

export  function IniciarSesion() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const {email, password}= formData;
    navigate("/")
    await loginWithEmailAndPassword(email,password)
    
  };

  const handleOnChange = (event) => {
    const {name, value} = event.target;
    setFormData({
      ...formData,
      [name]:value,
    });
};

const handleSingWithGoogle = async () => {
  await singInWithGoogle()
  navigate("/")
}
  return (
    
    <div className={styles.containerGlob}>
      <div className={styles.container}>
        <form className={styles.form} >
          <h1 className={styles.title}>¡Bienvenido de vuelta!</h1>
          

          <div className={styles.inputContainer}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            
          />
          </div>

          <div className={styles.inputContainer}>
            <input
            type="password"
            name="password"
            id="password"
            placeholder="Contraseña"
            
          />
         </div>
         <div className={styles.linedivision}>
          <hr  /> 
         </div>

         <div className={styles.loginAltern}>
          <button 
            type="button"
            onClick={handleSingWithGoogle}
          ><img src="./src/assets/google.png" alt="" /></button>
          
         </div>

        <button type="submit" className={styles.submitBtn}>
          Iniciar Sesión
        </button>

        <Link className={styles.loginRedirect} to={'/RegistrarUsuario'}>
          ¿No tienes una cuenta?{" "}
          <a className={styles.redirectLink} href='/RegistrarUsuario' >Regístrate</a>
        </Link>
      </form>
      </div>
      <img src="./src/assets/imgIniciarSesion.png" alt="" />

    </div>
  )
}
