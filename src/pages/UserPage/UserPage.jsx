import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import styles from "./UserPage.module.css";
import { Link, useNavigate } from "react-router-dom";
export default function User() {
  const { user, userIsLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    // If user data is not loading and user email is available, we can proceed with rendering
    if (!userIsLoading && user.email) {
      return;
    }
  }, [user, userIsLoading]);

  const changePage = async () => {
    navigate("/User");
  };

  // If user data is still loading, show a loading indicator
  if (userIsLoading) {
    return <p>Loading...</p>;
  }

        
        
    {/*TODO - Remove the //*/}
  return (

    <div className={styles.userCard}>
        <div className={styles.leftside}>
        <img className={styles.image} src="./src/assets/userPage.png" alt="" />
        <div className={styles.textName}>
         {/*   <p>{user.name}</p>*/}
            
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
                    {user.email}
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
                     {/*   <p>{user.numero}</p>*/}
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
                       {/*   <p>{user.carrera}</p>*/}
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
                      {/*   <p>{user.carnet}</p>*/}
                </p>
            </div>
          </label>
          </div>
        </div>
        </div>
    </div>
  )
}
