import styles from './MembersItem.module.css'
import userIcon from "../../../../../assets/userIcon.png"


const MembersItem = ({name, photoURL, num}) => {
  return (
    <div className={styles.container}>
      <p className={styles.num}>{num}</p>
      <img className={styles.img} src= { photoURL || userIcon } alt={name}  />
      <p className={styles.name}>{name}</p>
    </div>
  )
}

export default MembersItem