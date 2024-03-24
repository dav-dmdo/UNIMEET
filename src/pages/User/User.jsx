import styles from "./User.module.css";
export default function User() {
  
    {/*TODO - Conect to functional buttons*/}
  return (

    <div className={styles.userCard}>
        <div className={styles.leftside}>
        <img className={styles.image} src="./src/assets/userPage.png" alt="" />
        <div className={styles.textName}>
            {/*//TODO - Put the name from the user*/}
            <p>Nombre del Usuario</p>
        </div>
        <button type="submit" className={styles.submitBtn}  >
          Guardar cambios
        </button>
        </div>
       
        <div className={styles.rightside}>
        <div className={styles.titles}>
            <h1>Datos Personales</h1>
        </div>
        <div className={styles.text}>

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
