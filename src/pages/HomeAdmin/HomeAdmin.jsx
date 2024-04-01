import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import {useState } from "react";
import useGroups from '../../controllers/Hooks/useGroups';
import { GroupCard } from '../../components/GroupCard/GroupCard';
import { useNavigate } from "react-router-dom";

import styles from "./HomeAdmin.module.css";
import agregar from "../../assets/Agregar.png"
import eliminar from "../../assets/Eliminar.png"
import actualizar from "../../assets/Actualizar.png"



export default function HomeAdmin() {
    const { setGroupToShow } = useContext(UserContext);
    const groups=useGroups();
    const navigate = useNavigate();
  
    const handleClickOnGroup = (group) => {
      setGroupToShow(group);
      navigate("/agrupacion");
      
    };

    const handleAgregarAgrupacion = () => {
        navigate('/AgregarAgrupacion');
      };
      
      const handleEliminarAgrupacion = () => {
        navigate('/EliminarAgrupacion'); 
      };
      
      const handleActualizarAgrupacion = () => {
        navigate('/ModificarAgrupacion'); 
      };
      
      const handleAgregarCategoria = () => {
        navigate('/AgregarCategoria');
      };
      
      const handleEliminarCategoria = () => {
        navigate('/EliminarCategoria');
      };
      
      const handleActualizarCategoria = () => {
        navigate('/ModificarCategoria'); 
      };
    
    
    if (!groups) {
      return <p>Cargando...</p>;
    }
  
    
  
    return (
      
      <div>
        <h1 className={styles.title}>Agrupaciones Disponibles</h1>
        <div className={styles.groupCardContainer}>
          {Object.values(groups).map((group, index) => (
            <GroupCard
              key={index}
              nombre={group.nombre}
              img={group.img}
              className={styles.cards}
              onClick={() => handleClickOnGroup(group)}
            />
          ))}
        </div>
  
        <div className={styles.faq}>
          <h1 className={styles.principal}>Opciones</h1>
          <div className={styles.preguntas}>
            <div className={styles.block1}>
            <button className={styles.boton1} onClick={handleAgregarAgrupacion}><img src={agregar} className={styles.image}></img>Agregar Agrupación</button>
              <button className={styles.boton2} onClick={handleEliminarAgrupacion}><img src={eliminar} className={styles.image}></img>Eliminar Agrupación</button>
            <button className={styles.boton3} onClick={handleActualizarAgrupacion}><img src={actualizar} className={styles.image}></img>Modificar Agrupación</button>
        </div>
        <div className={styles.block2}>
            <button className={styles.boton4} onClick={handleAgregarCategoria}><img src={agregar} className={styles.image}></img>Agregar Categoría</button>
            <button className={styles.boton5} onClick={handleEliminarCategoria}><img src={eliminar} className={styles.image}></img>Eliminar Categoría</button>
            <button className={styles.boton6} onClick={handleActualizarCategoria}><img src={actualizar} className={styles.image}></img>Modificar Categoría</button>
            </div>
            </div>
        </div>
      </div>
    )
  }
  
  