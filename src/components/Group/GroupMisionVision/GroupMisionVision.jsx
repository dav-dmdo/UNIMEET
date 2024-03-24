import styles from "./GroupMisionVision.module.css";

const GroupMisionVision = ({ groupMision, groupVision }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.misionContainer}>
          <h2>MISION</h2>
          <p>{groupMision}</p>
        </div>
        <div className={styles.visionContainer}>
          <h2>VISION</h2>
          <p>{groupVision}</p>
        </div>
      </div>
    </>
  );
};

export default GroupMisionVision;
