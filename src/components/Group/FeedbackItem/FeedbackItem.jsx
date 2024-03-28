
import styles from './FeedbackItem.module.css';

const FeedbackItem = ({ sender, content, timestamp }) => {
  return (
    <div className={styles.feedbackItem}>
      <div className={styles.sender}>{sender}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.timestamp}>{timestamp}</div>
    </div>
  );
};

export default FeedbackItem;