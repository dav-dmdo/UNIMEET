import styles from './CategoryCard.module.css';

export default function CategoryCard(props) {
    const {category, groups, image} =props;
  return (
    <div className={styles.Layout}>
{/*TODO - SEE HOW CAN YOU MAKE THIS CHOOSE THE IMAGE BY THE CATEGORY*/}
        <div className={styles.images}>
        <img className={styles.image} src={props.image} alt="" />
        </div>
        <div className={styles.info}>
        <div className={styles.title}>
        <h1>{props.category}</h1>
        </div>
        <div className={styles.text}>
           <p>{props.groups}</p>
        </div>
        </div>
    </div>
  )
}
