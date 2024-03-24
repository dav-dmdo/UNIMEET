import CategoryCard from '../../componets/CategoryCard/CategoryCard';
import styles from './Categorias.module.css';

export  function Categorias() {
  return (
    <div className={styles.mainBox}>
      {/*ANCHOR - STEM*/}
      <div className={styles.category}>
      <CategoryCard category= "STEM" groups="Fórmula SAE" image= "./src/assets/STEM.png"/>
      </div>

      {/*ANCHOR - DEBATE*/}
      <div className={styles.category}>
      <CategoryCard category= "DEBATE" groups="Fórmula SAE" image= "./src/assets/DEBATE.png"/>
      </div>

      {/*ANCHOR - CULTURAL*/}
      <div className={styles.category}>
      <CategoryCard category= "STEM" groups="Fórmula SAE" image= "./src/assets/STEM.png"/>
      </div>

      {/*ANCHOR - OTHER*/}
      <div className={styles.category}>
      <CategoryCard category= "STEM" groups="Fórmula SAE" image= "./src/assets/STEM.png"/>
      </div>
      </div>
  )
}
