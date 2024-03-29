import { useTextInput } from "../../../hooks/useTextInput";
import instagramIcon from "../../../assets/instagramIcon.png";
import gmailIcon from "../../../assets/gmailIcon.png";
import styles from "./JoinGroup.module.css";

const JoinGroup = ({ groupIg, groupEmail, groupImg }) => {
  const { value: comment, onChange: handleCommentChange } = useTextInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <img
          className={styles.groupImg}
          src={groupImg}
          alt="Imagen del Logo de la agrupación"
        />
        <div className={styles.groupInfoContainer}>
          <div className={styles.igContainer}>
            <p>{groupIg}</p>
            <img src={instagramIcon} alt="" />
          </div>
          <div className={styles.emailContainer}>
            <img src={gmailIcon} alt="" />
            <p>{groupEmail}</p>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.mainTitle}>Forma parte de nosotros...</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <textarea
          className={styles.commentTextArea}
            type="text"
            placeholder="¿por qué estás interesado en unirte a esta agrupacion?"
            value={comment}
            onChange={handleCommentChange}
          />
          <button className={styles.submitButton}>Inscribirme</button>
        </form>
      </div>
    </div>
  );
};

export default JoinGroup;
