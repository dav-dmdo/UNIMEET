import { useTextInput } from "../../../hooks/useTextInput";
import instagramIcon from "../../../assets/instagramIcon.png";
import gmailIcon from "../../../assets/gmailIcon.png";
import styles from "./JoinGroup.module.css";

const JoinGroup = ({ groupIg, groupEmail }) => {
  const { value: name, onChange: handleNameChange } = useTextInput("");
  const { value: comment, onChange: handleCommentChange } = useTextInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, comment);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <img
          className={styles.groupImg}
          src="https://via.placeholder.com/300x300"
          alt=""
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre Completo"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            placeholder="¿por qué estás interesado en unirte a esta agrupacion?"
            value={comment}
            onChange={handleCommentChange}
          />
          <button >Inscribirme</button>
        </form>
      </div>
    </div>
  );
};

export default JoinGroup;
