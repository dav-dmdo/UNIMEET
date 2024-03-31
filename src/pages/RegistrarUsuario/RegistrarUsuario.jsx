import React, { useState } from 'react'
import styles from "./RegistrarUsuario.module.css"
import { Link, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword, singInWithGoogle } from '../../data/services/auth';

export function RegistrarUsuario() {
  const [formData, setFormData] = useState({
    
    email: '',
    agrupaciones: []
  });

  const handleSingWithGoogle = async () => {
    await singInWithGoogle()
  }
  const handleOnChange = async (event) => {
    const { name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    const {email, password, ...extraData} = formData;
    if(email.includes("unimet.edu.ve")==true){
      await registerWithEmailAndPassword(formData.email, formData.password, extraData)
      navigate('/')
    }else{
      alert("Debe tener un correo de estudiante de la Universidad")
    }
    
    
  };
    return(
    
        <div className={styles.containerGlob}>
        <img src="./src/assets/SignUp.png" alt="" />

          <div className={styles.container}>
            <form className={styles.form} onSubmit={onSubmit}>
              <h1 className={styles.title}>¡Únete a Unimeet!</h1>
              
    
              <div className={styles.inputContainer}>
              <input
                type="string"
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                className={styles.enter}
                onChange={handleOnChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Correo electrónico"
                className={styles.enter}
                onChange={handleOnChange}
              />
    
                <input
                type="password"
                name="password"
                id="password"
                placeholder="Contraseña"
                className={styles.enter}
                onChange={handleOnChange}
              />
             </div>
             <div className={styles.linedivision}>
              <hr  /> 
             </div>
    
             <div className={styles.loginAltern}>
              <button type="button" onClick={handleSingWithGoogle}><img src="./src/assets/google.png" alt="" /></button>
              
             </div>
    
            <button type="submit"  className={styles.submitBtn}>
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