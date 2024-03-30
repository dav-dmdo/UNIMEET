
import { useNavigate } from 'react-router';
import CategoryCard from '../../componets/CategoryCard/CategoryCard';
import useCategories from '../../controllers/Hooks/useCategories';
import styles from './Categorias.module.css';

export  function Categorias() {
  
  const categorias =useCategories();


  

  const navigate = useNavigate();

  const changePageAgg = async () => {
    navigate("/AgregarCategoria");
  };
  const changePageDel = async () => {
    navigate("/EliminarCategoria");
  };
  const changePageMod = async () => {
    navigate("/ModificarCategoria");
  };
  if (!categorias) {
    return <p>Cargando...</p>;
    
  }

  console.log(categorias[0].agrupaciones);
  return (
    <div className={styles.whole}>

    <div className={styles.mainBox}>
    {categorias.map((categoria, index) => (
      <div className={styles.category} key={index}>
        <CategoryCard
          category={categoria.nombre.toUpperCase()}
          groups={categoria.agrupaciones}
          image={categoria.imagen}
          />
      </div>

))}
  </div>
  <div className={styles.adminBox}>
  <div className={styles.button}>
      <img className={styles.image} src="./src/assets/Agregar.png" alt="" onClick={changePageAgg}/>
        <div className={styles.textName}>
          <p>Nueva Categoría</p>
          </div>
    </div>
    <div className={styles.button}>
      <img className={styles.image} src="./src/assets/Eliminar.png" alt="" onClick={changePageDel} />
        <div className={styles.textName}>
          <p>Eliminar Categoría</p>
          </div>
    </div>
    <div className={styles.button}>
      <img className={styles.image} src="./src/assets/Actualizar.png" alt="" onClick={changePageMod} />
        <div className={styles.textName}>
          <p>Editar Categoría</p>
          </div>
    </div>
  </div>
  
</div>
  
  )
}
