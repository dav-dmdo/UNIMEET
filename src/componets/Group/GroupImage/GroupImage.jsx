import styles from './GroupImage.module.css';


const GroupImage = ({groupImg, altImg, groupName}) => {
  return (
    <div className={styles.container}>
        <img className={styles.groupImg} src={groupImg} alt={altImg} />
        <div className={styles.groupImgCover}></div>
        <p className={styles.groupName}>{groupName}</p>
    </div>
  )
}

export default GroupImage