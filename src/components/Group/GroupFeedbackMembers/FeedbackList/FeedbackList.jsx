import FeedbackItem from './FeedbackItem/FeedbackItem';
import styles from './FeedbackList.module.css';

const FeedbackList = ({ messages }) => {
  return (
    <div className={styles.feedbackList}>
      {messages.map((message, index) => (
        <FeedbackItem key={index} {...message} />
      ))}
    </div>
  );
};

export default FeedbackList;