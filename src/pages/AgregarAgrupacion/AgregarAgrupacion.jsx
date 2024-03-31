import styles from './AgregarAgrupacion.module.css';
import { Selector } from '../../componets/Selector/Selector';
import useCategories from '../../controllers/Hooks/useCategories';
import { useState } from 'react';
import { db } from '../../data/firebase';


export default function AgregarAgrupacion(){
    
    const [selectedCategoria, setSelectedCategoria] = useState('');
    const categorias = useCategories();
    const [formData, setFormData] = useState({
    nombre: '',
    agrupaciones: [],
  });

  const handleCategoriaSelected = (event) => {
    setSelectedCategoria(event.target.value);
  };

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
            [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await db.collection('agrupaciones').add({
        nombre: formData.nombre,
        mision : formData.mision,
        vision: formData.vision,
        instagram: formData.instagram,
        email: formData.email,
        categorias: formData.categorias
      });

      console.log('Datos del formulario enviados a Firebase');
    } catch (error) {
      console.error('Error al enviar datos a Firebase:', error);
    }
  };


    return(
        <div className={styles.cuerpo}>
         <h1 className={styles.titulo}>Agregar Agrupacion</h1>

        <div className={styles.containerGlobal}>
            <div className={styles.containerLeft}>
            <div className={styles.form}>
                <label htmlFor='nombre' className={styles.labels}>Nombre de la Agrupacion </label>
                <input onSubmit={handleSubmit} type='string' id='nombre'></input>
            </div>
            <div className={styles.form}>
                <label htmlFor='mision' className={styles.labels}>Mision</label>
                <input onSubmit={handleSubmit} type='string' id='mision'></input>
            </div>
            <div className={styles.form}>
                <label htmlFor='vision' className={styles.labels}>Vision</label>
                <input onSubmit={handleSubmit} type='string' id='vision'></input>
            </div>
            </div>
            <div className={styles.containerRight}>
            <div className={styles.form}>
                <label htmlFor='instagram' className={styles.labels}>Instagram</label>
                <input onSubmit={handleSubmit} type='string' id='instagram'></input>
            </div>
            <div className={styles.form}>
                <label htmlFor='email' className={styles.labels}>Email</label>
                <input onSubmit={handleSubmit} type='string' id='email'></input>
            </div>
            <div className={styles.form}>
            <Selector 
                onSubmit={handleSubmit}
                className={styles.bigSelect}
                placeholder='Seleccionar Categoria'
                onChange={handleCategoriaSelected}
                label="Seleccionar Categoria"
                options={categorias}
                value={selectedCategoria}
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