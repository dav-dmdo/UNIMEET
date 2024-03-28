import styles from './MembersItem.module.css'

const MembersItem = ({name, photoURL, num}) => {
  return (
    <div className={styles.container}>
      <p className={styles.num}>{num}</p>
      <img className={styles.img} src= { photoURL || "src/assets/userIcon.png" } alt={name}  />
      <p className={styles.name}>{name}</p>
    </div>
  )
}

export default MembersItem