import styles from "./GroupMisionVision.module.css";
import MisionLogoNaranja from "../../../assets/MisionLogoNaranja.png"
import VisonLogo from "../../../assets/VisionLogo.png"

const GroupMisionVision = ({ groupMision, groupVision }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.misionContainer}>
         <img src={MisionLogoNaranja} alt="Imagen que contiene un texto decorado que dice Mision" style={{width: '350px', paddingRight:'20px'}}/>
          <p>{groupMision}</p>
        </div>
        <div className={styles.visionContainer}>
          <img src={VisonLogo} alt="Imagen que contiene un texto decorado que dice Vision" style={{width: '350px', paddingRight:'20px'}}/>
          <p>{groupVision}</p>
        </div>
      </div>
    </>
  );
};

export default GroupMisionVision;

