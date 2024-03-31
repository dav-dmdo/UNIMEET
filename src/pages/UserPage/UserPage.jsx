import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../data/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import styles from "./UserPage.module.css";
import { useUser } from "../../hooks/useUser";

export default function User() {
  const { user, userIsLoading } = useUser();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user && user.email) {
          const userCollectionRef = collection(db, "users");
          const q = query(userCollectionRef, where("email", "==", user.email));
          const querySnapshot = await getDocs(q);

          if (querySnapshot && !querySnapshot.empty) {
            const userDataFromSnapshot = querySnapshot.docs[0].data();
            setUserData(userDataFromSnapshot);
          } else {
            console.log("User document not found in Firestore.");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user]);

  if (userIsLoading || !userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.userCard}>
      <div className={styles.leftside}>
        <img className={styles.image} src={userData.img} alt="User" />
        <div className={styles.textName}>
          <p>{userData.name}</p>
        </div>
        <button
          type="button"
          className={styles.submitBtn}
          onClick={() => navigate("/User")}
        >
          Editar Perfil
        </button>
      </div>
      <div className={styles.rightside}>
        <div className={styles.titles}>
          <h1>Datos Personales</h1>
        </div>
        <div className={styles.text}>
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
            <div className={styles.information}>
              <p className={styles.txt}>{userData.phoneNum}</p>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="carrera">
              <span>Carrera</span>
            </label>
            <div className={styles.information}>
              <p className={styles.txt}>{userData.carrera}</p>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="carnet">
              <span>Carnet</span>
            </label>
            <div className={styles.information}>
              <p className={styles.txt}>{userData.carnet}</p>
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
  );
}
