import React from 'react'
import styles from "./ListadoAgrupaciones.module.css";
import useGroups from '../../componets/Hooks/useGroups';

export function ListadoAgrupaciones() {
  const groups=useGroups();

  // Verifica si clubs es null o undefined antes de acceder a sus propiedades
  if (!groups) {
    return <p>Cargando...</p>;
  }

  return (
      <main>  
          <section className={styles.middlebox}>
          <h1 className={styles.title}>Listado de Agrupaciones</h1>          
          </section>
          
          
      </main>
    
  )
}
