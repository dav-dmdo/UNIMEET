import styles from './GroupImage.module.css';


const GroupImage = ({groupImg, altImg, text, color}) => {

  const colorObj = {
    orange: "orange",
    black: "black",
  }
  const colorStyle = colorObj[color];

  return (
    <div className={styles.container}>
        <img className={styles.groupImg} src={groupImg} alt={altImg} />
        <div className={`${styles.groupImgCover} ${styles[colorStyle]}`}></div>
        <p className={styles.text}>{text}</p>
    </div>
  )
}

export default GroupImage