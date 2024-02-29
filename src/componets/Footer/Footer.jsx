import styles from "./Footer.module.css"
import React from 'react'

export  function Footer() {
  return (
    <div className={styles.container}>
      <div>
          <p className={styles.direccion}>Contacto</p>
          <p className={styles.descripcion}>+58 123-5678</p>
          <p className={styles.descripcion}>unimeet@unimet.edu.ve</p>
      </div>
      <div>
          <img className={styles.imgFooter}  src="./src/assets/logoFooter.png" alt="Logo Unimmet" />
          <p className={styles.copyright}>Copyright © 2024 - Universidad Metropolitana</p>
          <p className={styles.copyright}>Todos los derechos reservados.</p>
      </div>
      <div>
          <p className={styles.direccion} >Dirección</p>
          <p className={styles.descripcion} >Ditribuidor metropolitano Caracas, </p>
          <p className={styles.descripcion} >1060, Miranda, Venezuela</p>
      </div>

    </div>
  )
}
