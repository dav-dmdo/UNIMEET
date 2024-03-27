import styles from "./GroupMisionVision.module.css";

const GroupMisionVision = ({ groupMision, groupVision }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.misionContainer}>
         <img src="src/assets/MisionLogo.png" alt="Imagen que contiene un texto decorado que dice Mision" />
          <p>{groupMision}</p>
        </div>
        <div className={styles.visionContainer}>
          <img src="src/assets/VisionLogo.png" alt="Imagen que contiene un texto decorado que dice Vision" />
          <p>{groupVision}</p>
        </div>
      </div>
    </>
  );
};

export default GroupMisionVision;

