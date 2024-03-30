import styles from './AgregarAgrupacion.module.css';
import { Selector } from '../../componets/Selector/Selector';
import useCategories from '../../controllers/Hooks/useCategories';
import { useState } from 'react';


export default function AgregarAgrupacion(){
    const categorias = useCategories();
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
         <h1>Agregar Agrupacion</h1>

        <div className={styles.containerGlobal}>
            <div className={styles.containerLeft}>
            <div className={styles.form}>
                <label htmlFor='nombre'>Nombre de la Agrupacion</label>
                <input type='string' id='nombre'></input>
            </div>
            <div className={styles.form}>
                <label htmlFor='mision'>Mision</label>
                <input type='string' id='mision'></input>
            </div>
            <div className={styles.form}>
                <label htmlFor='vision'>Vision</label>
                <input type='string' id='vision'></input>
            </div>
            </div>
            <div className={styles.containerRight}>
            <div className={styles.form}>
                <label htmlFor='instagram'>Instagram</label>
                <input type='string' id='instagram'></input>
            </div>
            <div className={styles.form}>
                <label htmlFor='email'>Email</label>
                <input type='string' id='email'></input>
            </div>
            <div className={styles.form}>
            <Selector
                className={styles.bigSelect}
                placeholder='Seleccionar Categoria'
                label="Seleccionar Categoria"
                options={categorias}
                changeValue={(event) => {
                  handleOnChange({
                    target: { name: 'nombre', value: event.target.value },
                  });
                }}
              />
            </div>
            </div>   
        </div>
        <button className={styles.submit}>Agregar</button>
        </div>
    )
}