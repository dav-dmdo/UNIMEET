import styles from "./GroupCard.module.css"

export  function GroupCard() {

    return (
        <div className={styles.card}>
          <h1 className={styles.title}>Rescate UNIMET</h1>
          <button className={styles.button}>Ver información</button>
        </div>      
    )
  }