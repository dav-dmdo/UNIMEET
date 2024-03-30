import useGroups from '../../controllers/Hooks/useGroups';
import { Selector } from '../../componets/Selector/Selector';
import { useState } from 'react';
import styles from "../ModificarAgrupacion/ModificarAgrupacion.module.css"
import useCategories from '../../controllers/Hooks/useCategories';
import { db } from '../../data/firebase';
import { collection, doc, deleteDoc, getDoc, getDocs, query, where, updateDoc } from 'firebase/firestore';
export default function ModificarAgrupacion(){
     const groups = useGroups();
     
     const [formData2, setFormData2] = useState({
     nombre: '',
     agrupaciones: [],
   });

   const handleOnChange2 = (event) => {
    const { name, value } = event.target;
    setFormData2({
      ...formData2,
        [name]: value,
});
};
   
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
        [name]: value,
});
};



async function actualizarDocumento(titulo, nuevosAtributos) {
  try {
    //const documentoRef = db.collection('agrupaciones').doc(titulo);
    const documentoRef = doc(collection(db, 'agrupaciones'), titulo);
    const documento = await getDoc(documentoRef);

    if (!documento.exists) {
      throw new Error('El documento no existe.');
    }

    // Obtenemos los datos actuales del documento
    const datosActuales = documento.data();

    // Combinamos los datos actuales con los nuevos datos
    const nuevosDatos = { ...datosActuales, ...nuevosAtributos };

    // Actualizamos el documento con los nuevos datos
    //await documentoRef.update(nuevosDatos);
    await updateDoc(datosActuales,nuevosDatos);

    console.log('Documento actualizado correctamente.');
    return true;
  } catch (error) {
    console.error('Error al actualizar el documento:', error);
    return false;
  }
}

const nuevosAtributos = {
  categoria: 'Nueva Categoría',
  descripcion: 'Nueva descripción',
  email: 'nuevoemail@example.com',
  instagram: '@nuevoinstagram',
  mision: 'Nueva misión',
  vision: 'Nueva visión',
  nombre: 'Nuevo Nombre'
  // Agregar otros atributos que desees actualizar
};


    const onClick = () => {
      console.log(formData2.nombre)
      console.log(formData.nombre)
      actualizarDocumento('Arca Unimet', nuevosAtributos);
    }

    const categorias = useCategories();
    const [formData, setFormData] = useState({
    nombre: '',
    agrupaciones: [],
    });





    return(
      <div className={styles.cuerpo}>
      <h1 className={styles.titulo}>Modificar Agrupacion</h1>
      <div className={styles.agrupacionesSelector}>
      <Selector
                className={styles.seleccionar}
                placeholder='Seleccionar'
                label="Seleccionar Agrupación a Modificar"
                options={groups}
                changeValue={(event) => {
                  handleOnChange2({
                    target: { name: 'nombre', value: event.target.value },
                  });
                }}
              />
      </div>

     <div className={styles.containerGlobal}>
         <div className={styles.containerLeft}>
         <div className={styles.form}>
             <label className={styles.labelInput} htmlFor='nombre'>Nombre de la Agrupacion</label>
             <input className={styles.inputStr} type='string' id='nombre'></input>
         </div>
         <div className={styles.form}>
             <label className={styles.labelInput} htmlFor='mision'>Mision</label>
             <input className={styles.inputStr} type='string' id='mision'></input>
         </div>
         <div className={styles.form}>
             <label className={styles.labelInput} htmlFor='vision'>Vision</label>
             <input className={styles.inputStr} type='string' id='vision'></input>
         </div>
         </div>
         <div className={styles.containerRight}>
         <div className={styles.form}>
             <label className={styles.labelInput} htmlFor='instagram'>Instagram</label>
             <input className={styles.inputStr} type='string' id='instagram'></input>
         </div>
         <div className={styles.form}>
             <label className={styles.labelInput} htmlFor='email'>Email</label>
             <input className={styles.inputStr} type='string' id='email'></input>
         </div>
         <div className={styles.form}>
             <label className={styles.labelInput} htmlFor='año'>Año de Fundación</label>
             <input className={styles.inputStr} type='string' id='año'></input>
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
     <button className={styles.submit} onClick={onClick}>Guardar Cambios</button>
     </div>
    )
}