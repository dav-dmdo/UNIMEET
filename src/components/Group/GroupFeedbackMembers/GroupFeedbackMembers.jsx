import FeedbackList from "./FeedbackList/FeedbackList";
import FeedbackInput from "./FeedbackList/FeedbackInput/FeedbackInput";
import styles from "./GroupFeedbackMembers.module.css";
import MembersList from "./MembersList/MembersList";

const GroupFeedbackMembers = ({messages, members, onAddComment}) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.feedbackTitle}>Feedback</h1>
        <FeedbackList messages={messages} />
        <FeedbackInput onAddComment={onAddComment} />
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.membersTitle}>Integrantes</h1>
        <MembersList members={members} />
      </div>
    </div>
  );
};

export default GroupFeedbackMembers;
