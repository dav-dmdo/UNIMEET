import MembersItem from './MembersItem/MembersItem'
import styles from './MembersList.module.css'

const MembersList = ({members}) => {
  if (!members) {
    return (
      <MembersItem
        name={"No hay integrantes todavia..."}
        photoURL={"https://via.placeholder.com/150"}
        num={"--"}
      />
    );
  }
  return (
    <div className={styles.container}>
        {members.length > 0 ? (members.map((member, index) => (
            <MembersItem key={index} {...member} num={index+1}/>
        ))): (
            <MembersItem
            name={"--"}
            email={"--"}
            num={"0"}
          />
        )}

    </div>
  )
}

export default MembersList