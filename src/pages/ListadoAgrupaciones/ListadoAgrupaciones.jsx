import React from 'react'
import styles from "./ListadoAgrupaciones.module.css";
import useGroups from '../../controllers/Hooks/useGroups';
import useCategories from '../../controllers/Hooks/useCategories';
import { GroupCard } from '../../components/GroupCard/GroupCard';

export function ListadoAgrupaciones() {
  const groups=useGroups();
  const categories=useCategories();

  // Verifica si clubs es null o undefined antes de acceder a sus propiedades
  if (!groups) {
    return <p>Cargando...</p>;
  }

  return (
      <main>  
          <section className={styles.middlebox}>
          <h1 className={styles.title}>Listado de Agrupaciones</h1>          
          <GroupCard name={'Rescate Unimet'}></GroupCard>
          </section>
          
          
      </main>
    
  )
}
