import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryCard.module.css";
import useGroups from "../../controllers/Hooks/useGroups";

export default function CategoryCard(props) {
  const { setGroupToShow } = useContext(UserContext);
  const navigate = useNavigate();
  const { category, groups, image } = props;
  const agrup = useGroups();

  const handleClickOnGroup = (groupName) => {
    // Find the group object in the 'agrup' data that matches the clicked group name
    const selectedGroup = agrup.find(group => group.nombre === groupName);
    if (selectedGroup) {
      // If the group is found, set it as the group to show and navigate to '/agrupaciones'
      setGroupToShow(selectedGroup);
      navigate("/agrupacion");
    } else {
      console.log("Group not found:", groupName);
    }
  };

  return (
    <div className={styles.Layout}>
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
              <p
                key={index}
                onClick={() => handleClickOnGroup(group)}
                style={{ marginBottom: "10px", cursor: "pointer" }}
              >
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
