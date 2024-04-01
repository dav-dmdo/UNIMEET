import styles from "./Search.module.css"
import search from "../../assets/search.png"
export function Search({onChange}) {

  return (
    <div className={styles.background}>
        <img src={search} height='30px' className={styles.image}/>
        <input placeholder="Haz click para buscar una agrupación específica" className={styles.inputs} onChange={onChange}>
            
        </input>

    </div>
  );
}