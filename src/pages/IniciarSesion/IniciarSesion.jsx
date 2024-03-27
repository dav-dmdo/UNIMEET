import React from 'react'
import styles from "./IniciarSesion.module.css"
import { Link, useNavigate } from "react-router-dom";
export  function IniciarSesion() {
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
          <button><img src="./src/assets/google.png" alt="" /></button>
           <button><img src="./src/assets/facebook.png" alt="" /></button>
         </div>

        <button type="submit" className={styles.submitBtn}>
          Iniciar Sesión
        </button>

        <Link className={styles.loginRedirect}>
          ¿No tienes una cuenta?{" "}
          <span className={styles.redirectLink}>Regístrate</span>
        </Link>
      </form>
      </div>
      <img src="./src/assets/imgIniciarSesion.png" alt="" />

    </div>
  )
}
