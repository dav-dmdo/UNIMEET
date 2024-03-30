import React from 'react'
import styles from "./Agrupaciones.module.css";
import { GroupCard } from '../../components/GroupCard/GroupCard';
import { useNavigate } from "react-router-dom";


export function Agrupaciones() {

  const navigate = useNavigate();

  const handleMoreGroupsClick = () => {
    console.log('clic')
    navigate('/ListadoAgrupaciones')
  };

  return (
      <main>  
          <section className={styles.middlebox}>
          <h1 className={styles.title}>¡Hola Nombre de Usuario!</h1>
          <h2 className={styles.description}>Tus agrupaciones actuales son:</h2>       
          <div className={styles.groupCardContainer}>
            {/* Aca hay q llamar a las groupCards*/}
          <div className={styles.moreGroups} onClick={handleMoreGroupsClick}>
            <h3 className={styles.text}>Descubre más agrupaciones</h3>
          </div>
          </div>       
          </section>
          
          
      </main>
    
  )
}
