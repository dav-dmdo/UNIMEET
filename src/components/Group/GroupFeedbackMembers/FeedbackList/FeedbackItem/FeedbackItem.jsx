
import styles from './FeedbackItem.module.css';

const FeedbackItem = ({ user, comment, date }) => {
  return (
    <div className={styles.feedbackItem}>
      <div className={styles.sender}>{user}</div>
      <div className={styles.content}>{comment}</div>
      <div className={styles.timestamp}>{date}</div>
    </div>
  );
};

export default FeedbackItem;