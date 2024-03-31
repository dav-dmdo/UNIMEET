import { useTextInput } from "../../../../../hooks/useTextInput";
import styles from "./FeedbackInput.module.css";

const FeedbackInput = ({ onAddComment }) => {
  const {
    value: comment,
    onChange: handleCommentChange,
    setValue: setComment,
  } = useTextInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(comment);
    if (comment.trim() !== "") {
      setComment("");
    }
  };

  return (
    <form className={styles.feedbackInput} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        placeholder="Agrega un comentario..."
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <button type="submit" className={styles.button}>
        Comentar
      </button>
    </form>
  );
};

export default FeedbackInput;
