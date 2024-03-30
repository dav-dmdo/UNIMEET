import styles from './EliminarAgrupacion.module.css';
import useGroups from '../../controllers/Hooks/useGroups';
import { Selector } from '../../componets/Selector/Selector';
import { useState } from 'react';


export default function EliminarAgrupacion(){
    const groups = useGroups();
    const [formData, setFormData] = useState({
    nombre: '',
    agrupaciones: [],
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
        [name]: value,
});
};
    
    
    return(

        <div className={styles.cuerpo}>
            <h1 className={styles.titulo}>Eliminar Agrupacion</h1>
            <Selector
                className={styles.seleccionar}
                placeholder='Seleccionar'
                label="Seleccionar Agrupación a Eliminar: "
                options={groups}
                changeValue={(event) => {
                  handleOnChange({
                    target: { name: 'nombre', value: event.target.value },
                  });
                }}
              />

        <button className={styles.submit}>Eliminar</button>

        </div>
    )
    
}