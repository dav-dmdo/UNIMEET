import { Link, useNavigate } from "react-router-dom";
import  styles from "./Navbar.module.css"

export function Navbar(){

    return(
        <header>
            <div>
                <a href='/'><img  src="./src/assets/logo.png" alt="Logo Unimmet" /></a>
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <li>
                        <Link className={styles.Link} to={"/QuienesSomos"}><span>¿Quiénes Somos?</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={"/Categorias"}><span>Categorías</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={'/ListadoAgrupaciones'} ><span>Agrupaciones</span></Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={'/Agrupaciones'} ><span>Mis Agrupaciones</span></Link>
                    </li>
                    
                    <li id={styles.usuario}>
                        <Link to="/User">
                        <img className={styles.image} src="./src/assets/User.png" alt="" />
                        </Link>
                    </li>
                    <li>
                    <Link className={styles.Link} to={"/IniciarSesion"} ><span>Log In</span></Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}