import React from 'react'
import styles from "./ListadoAgrupaciones.module.css";
import useGroups from '../../controllers/Hooks/useGroups';
import { GroupCard } from '../../components/GroupCard/GroupCard';

export function ListadoAgrupaciones() {
  const groups=useGroups();
  console.log(groups);

  // Verifica si clubs es null o undefined antes de acceder a sus propiedades
  if (!groups) {
    return <p>Cargando...</p>;
  }

  return (
    <main>
      <section className={styles.middlebox}>
        <h1 className={styles.title}>Listado de Agrupaciones</h1>
        <div className={styles.groupCardContainer}>
          {Object.values(groups).map((group, index) => (
            <GroupCard
              key={index}
              nombre={group.nombre}
              img={group.img}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
