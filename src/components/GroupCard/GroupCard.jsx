import styles from "./GroupCard.module.css"

export  function GroupCard({ nombre, img, onClick}) {

  return (
    <div className={styles.card}  style={{ backgroundImage: `url(${img})` }}>
      <h1 className={styles.title}>{nombre}</h1>
      <button onClick={onClick} className={styles.button}>Ver información</button>
    </div>
  );
}