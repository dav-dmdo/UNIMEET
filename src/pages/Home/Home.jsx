import React from 'react'
import {useState } from "react";
import useGroups from '../../controllers/Hooks/useGroups';
import { GroupCard } from '../../components/GroupCard/GroupCard';
import { Search } from '../../components/Search/Search';

import styles from "./Home.module.css";


export function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const groups=useGroups();

  
  
  if (!groups) {
    return <p>Cargando...</p>;
  }

  const filteredGroups = groups.filter((group) =>
      group.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    
    <div>
      <h1 className={styles.title}>¡ÚNETE A TUS AGRUPACIONES FAVORITAS!</h1>
      <Search onChange={(e) => setSearchQuery(e.target.value)}></Search>
      <div className={styles.groupCardContainer}>
          {Object.values(filteredGroups).map((group, index) => (            
            <GroupCard
              key={index}
              nombre={group.nombre}
              img={group.img}
              className={styles.cards}
            />
          ))}
        </div>
      <div className={styles.faq}>
        <h1 className={styles.principal}>Preguntas Frecuentes</h1>
        <div className={styles.preguntas}>
          <div className={styles.block1}>
            <div className={styles.preg1}><h2>¿Cómo puedo unirme a una agrupación?</h2>
              <p className={styles.answer}>¡Es muy sencillo! Sólo debes iniciar sesión y luego hacer click en el botón de Unirme dentro de la agrupación deseada.</p>
            </div>
            <div className={styles.preg2}><h2>¿Debo ser estudiante de la UNIMET para unirme a las agrupaciones?</h2>
              <p className={styles.answer}>Si, las agrupaciones están dirigidas únicamente hacia estudiantes actuales de la Universidad Metropolitana.</p>
            </div></div>
            <div className={styles.block2}>
            <div className={styles.preg3}><h2>¿De qué sirve mi aporte monetario?</h2>
              <p className={styles.answer}>El aporte monetario se realiza al unirte a una agrupación y el mismo es opcional. Este beneficia grandemente a la agrupación ya que permite cubrir gastos lo cual facilita la creación de nuevas iniciativas.</p>
            </div>
            <div className={styles.preg4}><h2>¿Qué beneficio me da pertenecer a una agrupación?</h2>
              <p className={styles.answer}>Pertencer a una agrupación estudiantil tiene numerosos beneficios, como conocer a personas con intereses similares lo que te permite integrarte en una comunidad con objetivos similares y apoyo mutuo.</p>
            </div></div>
          </div>
      </div>
    </div>
  )
}
