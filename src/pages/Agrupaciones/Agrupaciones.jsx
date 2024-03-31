import styles from "./Agrupaciones.module.css";
import { GroupCard } from '../../components/GroupCard/GroupCard';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import {getUserProfile} from '/src/data/services/users.js'
import React, { useState, useEffect } from 'react';


export function Agrupaciones() {

  const navigate = useNavigate();
  const {user, isLoading}=useContext(UserContext);
  const [userGroups, setUserGroups]=useState(null);

  useEffect(() => {
    const fetchUserGroups = async () => {
      try {
        const userProfile = await getUserProfile(user.email); 
        if (userProfile) {
          setUserGroups(userProfile.agrupaciones); 
          console.log(userProfile)
        }
      } catch (error) {
        console.log(error); 
      }
    };
  
    if (user) {
      fetchUserGroups();
    }
  }, [user]);

  const handleMoreGroupsClick = () => {
    console.log('clic')
    navigate('/ListadoAgrupaciones')
  };

  if(userGroups===null){
    return <div>Cargando...</div>
  }

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
