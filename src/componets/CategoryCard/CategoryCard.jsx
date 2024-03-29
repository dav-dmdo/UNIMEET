import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryCard.module.css";

export default function CategoryCard(props) {
  const { setGroupToShow } = useContext(UserContext);
  const navigate = useNavigate();
  const { category, groups, image } = props;

  const handleClickOnGroup = (group) => {
    setGroupToShow(group);
    navigate("/agrupacion");
  };
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
          {Array.isArray(groups)
            ? groups.map((group, index) => (
                <p 
                key={index} 
                onClick={() => handleClickOnGroup(group)}
                style={{ marginBottom: "10px" }}>
                  {group}
                </p>
              ))
            : groups}
        </div>
      </div>
    </div>
  );
}
