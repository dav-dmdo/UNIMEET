import useGroups from '../../controllers/Hooks/useGroups';
import { Selector } from '../../componets/Selector/Selector';
import { useState } from 'react';
import styles from "../ModificarAgrupacion/ModificarAgrupacion.module.css"
import useCategories from '../../controllers/Hooks/useCategories';
import { db } from '../../data/firebase';
import { collection, doc, deleteDoc, getDoc, getDocs, query, where, updateDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";


export default function ModificarAgrupacion(){
     const navigate = useNavigate();

     const groups = useGroups();
     const categorias = useCategories();

     const [agrupacion, setAgrupacion] = useState({nombre: '', });
     const [categoria, setCategorias] = useState({nombre: '',});
     const [nombre, setNombre] = useState('');
     const [mision, setMision] = useState('');
     const [vision, setVision] = useState('');
     const [year, setYear] = useState('');
     const [instagram, setInstagram] = useState('');
     const [email, setEmail] = useState('');

   const handleAgrupacion = (event) => {
    const { name, value } = event.target;
    setAgrupacion({
      ...agrupacion,
        [name]: value,
});
};
   
  const handleCategory = (event) => {
    const { name, value } = event.target;
    setCategorias({
      ...categorias,
        [name]: value,
});
};

const handleNombre = (e) => {
  setNombre(e.target.value);
};

const handleMision = (e) => {
  setMision(e.target.value);
};

const handleVision = (e) => {
  setVision(e.target.value);
};

const handleYear = (e) => {
  setYear(e.target.value);
};

const handleInstagram = (e) => {
  setInstagram(e.target.value);
};

const handleEmail = (e) => {
  setEmail(e.target.value);
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
    await updateDoc(documentoRef, nuevosDatos);

    console.log('Documento actualizado correctamente.');
    alert('Agrupación actualizada con éxito')
    navigate('/HomeAdmin')
    return true;
  } catch (error) {
    console.error('Error al actualizar el documento:', error);
    return false;
  }
}

const nuevosAtributos = {
  categoria: categoria.nombre,
  email: email,
  instagram: instagram,
  mision: mision,
  vision: vision,
  nombre: nombre,
  year: year
};


function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9.]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

    const onClick = () => {
      if (
        !agrupacion.nombre ||
        !categoria.nombre ||
        !instagram ||
        !year ||
        !mision ||
        !vision ||
        !email
      ) {
        alert('Por favor llene todo los campos');
        return;
      } else if (!validateEmail(email)) {
        alert('Por favor ingrese un email válido');
        return;
      } else if (isNaN(year) || year <= 1900) {
        alert('Por favor ingrese un año válido');
        return;
      }

      

      actualizarDocumento(agrupacion.nombre, nuevosAtributos);
      

    }



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
                  handleAgrupacion({
                    target: { name: 'nombre', value: event.target.value },
                  });
                }}
              />
      </div>

     <div className={styles.containerGlobal}>
         <div className={styles.containerLeft}>
         <div className={styles.form}>
             <label className={styles.labelInput} htmlFor='nombre'>Nombre de la Agrupacion</label>
             <input className={styles.inputStr} type='string' id='nombre' onChange={handleNombre} placeholder={agrupacion.nombre}></input>
         </div>
         <div className={styles.form}>
             <label className={styles.labelInput} htmlFor='mision'>Mision</label>
             <input className={styles.inputStr} type='string' id='mision' onChange={handleMision}></input>
         </div>
         <div className={styles.form}>
             <label className={styles.labelInput} htmlFor='vision'>Vision</label>
             <input className={styles.inputStr} type='string' id='vision' onChange={handleVision}></input>
         </div>
         </div>
         <div className={styles.containerRight}>
         <div className={styles.form}>
             <label className={styles.labelInput} htmlFor='instagram'>Instagram</label>
             <input className={styles.inputStr} type='string' id='instagram' onChange={handleInstagram}></input>
         </div>
         <div className={styles.form}>
             <label className={styles.labelInput} htmlFor='email'>Email</label>
             <input className={styles.inputStr} type='email' id='email' onChange={handleEmail}></input>
         </div>
         <div className={styles.form}>
             <label className={styles.labelInput} htmlFor='año'>Año de Fundación</label>
             <input className={styles.inputStr} type='string' id='año' onChange={handleYear}></input>
         </div>
         <div className={styles.form}>
         <Selector
             className={styles.bigSelect}
             placeholder='Seleccionar Categoria'
             label="Seleccionar Categoria"
             options={categorias}
             changeValue={(event) => {
               handleCategory({
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