import FeedbackList from "../FeedbackList/FeedbackList";
import FeedbackInput from "../FeedbackInput/FeedbackInput";
import styles from "./GroupFeedbackMembers.module.css";

const GroupFeedbackMembers = ({messages}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.feedbackTitle}>Feedback</h1>
        <FeedbackList messages={messages} />
        <FeedbackInput onAddComment={console.log} />
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.membersTitle}>Integrantes</h1>

      </div>
    </div>
  );
};

export default GroupFeedbackMembers;
