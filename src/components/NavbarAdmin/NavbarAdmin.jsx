import { Link, useNavigate } from "react-router-dom";
import  styles from "./NavbarAdmin.module.css"

export function NavbarAdmin(){

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
                        <Link className={styles.Link} to={"/Categorias"}><span>Categorías</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={'/ListadoAgrupaciones'} ><span>Agrupaciones</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={"/IniciarSesion"} ><span>Log Out</span></Link>
                    </li>
                    
                    
                </ul>
            </nav>
        </header>
    );
}