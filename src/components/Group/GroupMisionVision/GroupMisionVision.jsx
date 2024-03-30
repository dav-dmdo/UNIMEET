import styles from "./GroupMisionVision.module.css";

const GroupMisionVision = ({ groupMision, groupVision }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.misionContainer}>
         <img src="src/assets/MisionLogoNaranja.png" alt="Imagen que contiene un texto decorado que dice Mision" style={{width: '350px', paddingRight:'20px'}}/>
          <p>{groupMision}</p>
        </div>
        <div className={styles.visionContainer}>
          <img src="src/assets/VisionLogo.png" alt="Imagen que contiene un texto decorado que dice Vision" style={{width: '350px', paddingRight:'20px'}}/>
          <p>{groupVision}</p>
        </div>
      </div>
    </>
  );
};

export default GroupMisionVision;

