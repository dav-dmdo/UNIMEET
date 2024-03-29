import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./ListadoAgrupaciones.module.css";
import useGroups from '../../controllers/Hooks/useGroups';
import { GroupCard } from '../../components/GroupCard/GroupCard';

export function ListadoAgrupaciones() {
  const { setGroupToShow } = useContext(UserContext);
  const navigate = useNavigate();
  const groups=useGroups();
  console.log(groups);

  // Verifica si clubs es null o undefined antes de acceder a sus propiedades
  if (!groups) {
    return <p>Cargando...</p>;
  }

  const handleClickOnGroup = (group) => {
    setGroupToShow(group);
    navigate("/agrupacion");
    
  };

  return (
    <main>
      <section className={styles.middlebox}>
        <h1 className={styles.title}>Listado de Agrupaciones</h1>
        <div className={styles.groupCardContainer}>
          {Object.values(groups).map((group, index) => (
            <GroupCard
              key={index}
              nombre={group.nombre}
              img={group.img}
              onClick={() => handleClickOnGroup(group)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
