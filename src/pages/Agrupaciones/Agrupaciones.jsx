import styles from "./Agrupaciones.module.css";
import { GroupCard } from '../../components/GroupCard/GroupCard';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';
import {getUserProfile} from '/src/data/services/users.js'
import React, { useState, useEffect } from 'react';
import useGroups from "../../controllers/Hooks/useGroups";


export function Agrupaciones() {

  const {user, isLoading}=useContext(UserContext);
  const [userGroups, setUserGroups]=useState(null);
  const [userName, setUserName]=useState(null);
  const { setGroupToShow } = useContext(UserContext);
  const navigate = useNavigate();
  const groups=useGroups();
  console.log(groups)

  useEffect(() => {
    const fetchUserGroups = async () => {
      try {
        const userProfile = await getUserProfile(user.email); 
        if (userProfile) {
          setUserGroups(userProfile.agrupaciones); 
          setUserName(userProfile.name);
        }
      } catch (error) {
        console.log(error); 
      }
    };
  
    if (user) {
      fetchUserGroups();
    }
  }, [user]);

  const handleClickOnGroup = (group) => {
    console.log(group);
    setGroupToShow(group);
    navigate("/agrupacion");
    
  };
  
  const handleMoreGroupsClick = () => {
    console.log('clic')
    navigate('/ListadoAgrupaciones')
  };

  if(userGroups===null){
    return <div>Cargando...</div>
  }

  return (
      <main>  
          {console.log("grupos")}
          {console.log(userGroups)}
          <section className={styles.middlebox}>
          <h1 className={styles.title}>¡Hola, {userName}!</h1>
          <h2 className={styles.description}>Tus agrupaciones actuales son:</h2>       
          <div className={styles.groupCardContainer}>
          {userGroups.map((userGroup, index) => {
            const group = groups.find((item) => item.nombre === userGroup);
            if (group) {
              return (
                <GroupCard
                  key={index}
                  nombre={group.nombre}
                  img={group.img}
                  onClick={() => handleClickOnGroup(group)}
                />
              );
            } 
          })}
          <div className={styles.moreGroups} onClick={handleMoreGroupsClick}>
            <h3 className={styles.text}>Descubre más agrupaciones</h3>
          </div>
          </div>       
          </section>
          
          
      </main>
    
  )
}
