
import { useTextInput } from "../../../hooks/useTextInput";
import styles from "./FeedbackInput.module.css";

const FeedbackInput = ({ onAddComment }) => {
  const {comment, handleCommentChange, setValue:setComment} = useTextInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      onAddComment(comment);
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