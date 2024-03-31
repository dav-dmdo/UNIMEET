import FeedbackItem from "./FeedbackItem/FeedbackItem";
import styles from "./FeedbackList.module.css";

const FeedbackList = ({ messages }) => {
  if (!messages) {
    return (
      <FeedbackItem
        date={"--/--/--"}
        user={"--"}
        comment={"No hay comentarios todavía..."}
      />
    );
  }

  return (
    <div className={styles.feedbackList}>
      {messages.length > 0 ? (
        messages.map((message, index) => (
          <FeedbackItem key={index} {...message} />
        ))
      ) : (
        <FeedbackItem
          date={"--/--/--"}
          user={"--"}
          comment={"No hay comentarios todavía..."}
        />
      )}
    </div>
  );
};

export default FeedbackList;