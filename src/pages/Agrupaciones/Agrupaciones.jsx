import React from 'react'
import styles from "./Agrupaciones.module.css";
import { GroupCard } from '../../components/GroupCard/GroupCard';


export function Agrupaciones() {
  return (
      <main>  
          <section className={styles.middlebox}>
          <h1 className={styles.title}>¡Hola Nombre de Usuario!</h1>
          <h2 className={styles.description}>Tus agrupaciones actuales son:</h2>       
          <div className={styles.groupCardContainer}>
            <GroupCard></GroupCard>
            <GroupCard></GroupCard>
            <GroupCard></GroupCard>
            <GroupCard></GroupCard>
            </div>       
          </section>
          
          
      </main>
    
  )
}
