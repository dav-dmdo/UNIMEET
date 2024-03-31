import { useTextInput } from "../../../hooks/useTextInput";
import instagramIcon from "../../../assets/instagramIcon.png";
import gmailIcon from "../../../assets/gmailIcon.png";
import styles from "./JoinGroup.module.css";
import {Paypal} from "../../../pages/Paypal/Paypal.jsx"
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext.jsx';
import { useContext } from "react";
import { getUserProfile, updateUserGroup } from "../../../data/services/users.js";
import { updateGroupMembers } from "../../../data/services/groups.js";


const JoinGroup = ({ groupIg, groupEmail, groupImg, groupName }) => {
  const { value: comment, onChange: handleCommentChange } = useTextInput("");
  const [errorMessage, setErrorMessage] = useState('');
  const {user, isLoading }= useContext(UserContext)
  const [userGroups, setUserGroups] = useState(null);
  const [userName, setUserName] = useState('');


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') {
      setErrorMessage('¡Por favor deja un comentario!');
    } 
    else if (isMember){
      console.log(user.uid)
      handleSubscription(groupName, isMember)
      navigate('/')
    }
    else {
      console.log(comment);
      handleSubscription (groupName, isMember);
      openPaypal();
      
    }
  }

  const handleSubscription = async (groupName, isMember) =>{
    try {
      let updatedUserGroups = userGroups;
      if (!isMember) {
        updatedUserGroups = [...userGroups, groupName];
        setUserGroups(updatedUserGroups);
      } else {
        updatedUserGroups = userGroups.filter((club) => club !== groupName);
        setUserGroups(updatedUserGroups);
      }
      await updateUserGroup(user?.uid, updatedUserGroups);
      await updateGroupMembers(groupName, userName, isMember)
      console.log(userGroups)
    } catch (error) {
      console.log("Error updating user clubs:", error);
    }
  }

  const openPaypal = () => {
    navigate('/Paypal');
  };

  useEffect(() => {
    const fetchUserGroups = async () => {
      try {
        const userProfile = await getUserProfile(user.email);
        if (userProfile) {
          setUserGroups(userProfile.agrupaciones);
          setUserName(userProfile.name);
          console.log(userProfile)
        }
      } catch (error) {
        console.log(error)     
      }
    }; if (user) {
      fetchUserGroups();
    }
  }, [user]);


  if (isLoading || userGroups === null) {
    return <div>Loading...</div>;
  }

  const isMember = userGroups.includes(groupName);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <img
          className={styles.groupImg}
          src={groupImg}
          style={{borderRadius: '30px'}}
          alt="Imagen del Logo de la agrupación"
        />
        <div className={styles.groupInfoContainer}>
          <div className={styles.igContainer}>
            <p>{groupIg}</p>
            <img src={instagramIcon} alt="" />
          </div>
          <div className={styles.emailContainer}>
            <img src={gmailIcon} alt="" />
            <p>{groupEmail}</p>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.mainTitle}>{isMember ? "¡Ya formas parte!" : "Forma parte de nosotros..."}</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <textarea
          className={styles.commentTextArea}
            type="text"
            placeholder={isMember ? "¿Por qué deseas salirte de la agrupación?" : "¿Por qué estás interesado en unirte a esta agrupación?"}
            value={comment}
            onChange={handleCommentChange}
          />
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button className={styles.submitButton} onClick={handleSubmit}>{isMember ? "Retirarme" : "Inscribirme"}</button>
        </form>
      </div>
    </div>
  );
};

export default JoinGroup;
