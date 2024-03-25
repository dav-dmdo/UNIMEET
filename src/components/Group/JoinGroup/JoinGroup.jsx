import styles from "./JoinGroup.module.css";

const JoinGroup = ({ groupIg, groupEmail }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <img className={styles.groupImg} src="https://via.placeholder.com/300x300" alt="" />
        <div className={styles.groupInfoContainer}>
          <div className={styles.igContainer}>
            <p>{groupIg}</p>
            <img src="src/assets/instagramIcon.png" alt="" />
          </div>
          <div className={styles.emailContainer}>
            <img src="src/assets/gmailIcon.png" alt="" />
            <p>{groupEmail}</p>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.mainTitle}>Forma parte de nosotros...</h1>
        <form action="">
            <input type="text" placeholder="Nombre Completo" />
            <input type="text" placeholder="¿por qué estás interesado en unirte a esta agrupacion?" />
            <button>Inscribirme</button>
        </form>
      </div>
    </div>
  );
};

export default JoinGroup;
