import styles from "./UserPage.module.css";
import { Link, useNavigate } from "react-router-dom";
export default function User() {
    const navigate = useNavigate();
    const changePage = async () => {
 
        navigate("/UserPage");
        };
  
    {/*TODO - Conect to functional buttons*/}
  return (

    <div className={styles.userCard}>
        <div className={styles.leftside}>
        <img className={styles.image} src="./src/assets/userPage.png" alt="" />
        <div className={styles.textName}>
            {/*//TODO - Put the info from the user*/}
            <p>Nombre del Usuario</p>
            
        </div>
        <button type="submit" className={styles.submitBtn} onClick={changePage} >
          Editar Perfil
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
            <div className={styles.information}>
            <p className={styles.txt}>
                    l.alb@correo.unimet.edu.ve
                </p>
            </div>
          </label>
          
          </div>

          {/*SECTION -  TELEFONO*/}
          <div className={styles.inputContainer}>
          <label htmlFor="phoneNum">
            <span>Número de Teléfono</span>
            <div className={styles.information}>
            <p className={styles.txt}>
                   04127869485
                </p>
                </div>
          </label>
          
          </div>

          {/*SECTION -  CARRERA*/}
          <div className={styles.inputContainer}>
          <label htmlFor="carrera">
            <span>Carrera</span>
            <div className={styles.information}>
                <p className={styles.txt}>
                    Ingenieria de sistemas
                </p>
            </div>
          </label>
          
          </div>

          {/*SECTION CARNET */}
          <div className={styles.inputContainer}>
          <label htmlFor="carnet">
            <span>Carnet</span>
            <div className={styles.information}>
            <p className={styles.txt}>
                    202932323
                </p>
            </div>
          </label>
          
          </div>
        </div>
        </div>
    </div>
  )
}
