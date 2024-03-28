import MembersItem from '../MembersItem/MembersItem'
import styles from './MembersList.module.css'

const MembersList = ({members}) => {
  return (
    <div className={styles.container}>
        {members.map((member, index) => (
            <MembersItem key={index} {...member}/>
        ))}

    </div>
  )
}

export default MembersList