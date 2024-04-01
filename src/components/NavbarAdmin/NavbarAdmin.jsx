import { Link, useNavigate } from "react-router-dom";
import  styles from "./NavbarAdmin.module.css"
import { logout } from "../../data/services/auth";
import VectorNavBar from "../../assets/VectorNavBar.png"
import logo from "../../assets/logo.png"


export function NavbarAdmin(){
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout();
        navigate('/')
        window.location.reload()
    }

    return(
        <header>
            
            <nav className={styles.navbar}>
                <input type="checkbox" id={styles.check} />
                <label htmlFor={styles.check} className={styles.checkbtn}>
                    <img src={VectorNavBar} alt="" />
                </label>
                <a href="/HomeAdmin" className={styles.enlace}>
                    <img  className={styles.logo} src={logo} alt="Logo Unimmet" />
                </a>
                <ul className={styles.navList}>
                    <li>
                        <Link className={styles.Link} to={"/Categorias"}><span>Categorías</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={'/ListadoAgrupaciones'} ><span>Agrupaciones</span></Link>
                    </li>
                    <li>
                         <Link className={styles.Link}><span> Administrador </span></Link>
                    </li>
                    <li>
                     <button className={styles.boton} type="button" onClick={handleLogout}>Log Out</button>
                    </li>
                    
                    
                    
                </ul>
            </nav>
        </header>
    );
}