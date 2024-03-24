import styles from './CategoryCard.module.css';

export default function CategoryCard(props) {
  const { category, groups, image } = props;
  return (
    <div className={styles.Layout}>
      {/* TODO - SEE HOW CAN YOU MAKE THIS CHOOSE THE IMAGE BY THE CATEGORY */}
      <div className={styles.images}>
        <img className={styles.image} src={image} alt="" />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h1>{category}</h1>
        </div>
        <div className={styles.text}>
          {Array.isArray(groups) ? (
            groups.map((group, index) => (
              <p key={index} style={{ marginBottom: '10px' }}>
                {group}
              </p>
            ))
          ) : (
            groups
          )}
        </div>
      </div>
    </div>
  );
}
