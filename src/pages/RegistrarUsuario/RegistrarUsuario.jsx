import React from 'react'
import styles from "./RegistrarUsuario.module.css"
import { Link, useNavigate } from "react-router-dom";


export function RegistrarUsuario() {
    return(
    
        <div className={styles.containerGlob}>
        <img src="./src/assets/SignUp.png" alt="" />

          <div className={styles.container}>
            <form className={styles.form} >
              <h1 className={styles.title}>¡Únete a Unimeet!</h1>
              
    
              <div className={styles.inputContainer}>
              <input
                type="string"
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                className={styles.enter}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Correo electrónico"
                className={styles.enter}
              />
    
                <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                className={styles.enter}
              />
             </div>
             <div className={styles.linedivision}>
              <hr  /> 
             </div>
    
             <div className={styles.loginAltern}>
              <button><img src="./src/assets/google.png" alt="" /></button>
              
             </div>
    
            <button type="submit" className={styles.submitBtn}>
              Registrar Usuario
            </button>
    
            <Link className={styles.loginRedirect} to={'/IniciarSesion'}>
              ¿Ya tienes una cuenta?{" "}
              <a className={styles.redirectLink} href='/IniciarSesion' >Inicia Sesión</a>
            </Link>
          </form>
          </div>
    
        </div>
      )

}