import { Link, useNavigate } from "react-router-dom";
import  styles from "./Navbar.module.css"

import { logout } from "../../data/services/auth";
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { getUserProfile } from "../../data/services/users.js";


export function Navbar(){
        // la variable de isLoading es un estado que se encarga de verificar si el usuario esta cargando o no
        // porque el aurtenticador de google tarda unos segundos en resolver la peticion donde se verifica 
        // si el usuario esta logeado o no
    const navigate = useNavigate()

    const {user, isLoading }= useContext(UserContext)
    const [userName, setUserName] = useState('');

    const handleLogout = async () => {
        await logout();
        navigate('/')
    }

     useEffect(() => {
    const fetchUserGroups = async () => {
      try {
        const userProfile = await getUserProfile(user.email);
        if (userProfile) {
          setUserName(userProfile.name);
          
        }
      } catch (error) {
        console.log(error)     
      }
    }; if (user) {
      fetchUserGroups();
    }
  }, [user]);
    

    return(
        <header>
            
            <nav className={styles.navbar}>
                <input type="checkbox" id={styles.check} />
                <label htmlFor={styles.check} className={styles.checkbtn}>
                    <img src="./src/assets/VectorNavBar.png" alt="" />
                </label>
                <a href="/" className={styles.enlace}>
                    <img  className={styles.logo} src="./src/assets/logo.png" alt="Logo Unimmet" />
                </a>
                <ul className={styles.navList}>
                    <li>
                        <Link className={styles.Link} to={"/QuienesSomos"}><span>¿Quiénes Somos?</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={'/ListadoAgrupaciones'} ><span>Agrupaciones</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={"/Categorias"}><span>Categorías</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={'/Agrupaciones'} ><span>Mis Agrupaciones</span></Link>
                    </li>
                    
                    {!!user &&(
                        <>
                            <li>
                                <Link className={styles.Link} to={'/UserPage'}><span> {userName} </span></Link>
                            </li>
                            <li>
                            <button className={styles.boton} type="button" onClick={handleLogout}>Log Out</button>
                            </li>
                        </>
                    )}
                    {!user &&(
                        <>
                        <li>
                        <Link to="/UserPage" >
                        <img id={styles.perfil} className={styles.image} src="./src/assets/User.png" alt="" />
                        </Link>
                    <Link className={styles.Link} to={"/IniciarSesion"} ><span>Log In</span></Link>

                        </li>
                        </>
                    )}
                    

                    
                    
                    
                </ul>
            </nav>
        </header>
    );
}