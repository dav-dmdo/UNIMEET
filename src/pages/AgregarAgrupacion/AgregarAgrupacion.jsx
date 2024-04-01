import styles from './AgregarAgrupacion.module.css';
import { Selector } from '../../componets/Selector/Selector';
import useCategories from '../../controllers/Hooks/useCategories';
import { useState } from 'react';
import { collection,  addDoc, query,getDocs,where} from "firebase/firestore"
import { db } from '../../data/firebase';



export default function AgregarAgrupacion(){

    const [nombre, setNombre] = useState('');
    const [mision, setMision] = useState('');
    const [vision, setVision] = useState('');
    const [instagram, setInstagram] = useState('');
    const [email, setEmail ]= useState('');

    
    const [selectedCategoria, setSelectedCategoria] = useState('');
    const categorias = useCategories();



    const [formData, setFormData] = useState({
    nombre: '',
    agrupaciones: [],
  });


  const handleCategory = (event) => {
    const { name, value } = event.target;
    setSelectedCategoria({
      ...selectedCategoria,
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

const handleInstagram = (e) => {
  setInstagram(e.target.value);
};

const handleEmail = (e) => {
  setEmail(e.target.value);
};


// Función para verificar si un usuario ya existe
const verificarAgrupacion = async (agrupacionNueva) => {
  try {
    const verificar = query(collection(db, 'agrupacion'), where('nombre', '==', agrupacionNueva));
    const querySnapshot = await getDocs(verificar);
    return !querySnapshot.empty;
  } catch (error) {
    return false; // Devolvemos falseen caso de que no se encuentre
  }
};

  const onClick = async () => {

    if (
      verificarAgrupacion!= false
    ){

    alert('el nombre de la agrupacion ya existe cree otro');
    return;
  }

    // Creamos un objeto con los datos de la nueva agrupacion 
    const nuevaAgrupacion= {
      nombre: nombre,
      mision: mision,
      vision:vision,
      instagram:instagram,
      email: email,
      categorias: selectedCategoria,
    };

    try {

      await addDoc(collection(db, 'agrupaciones'), nuevaAgrupacion);
      console.log('Agrupacion añadida con exito');

      // Limpiamos los campos del formulario después de agregar el usuario
      setNombre('');
      setMision('');
      setVision('');
      setInstagram('');
      setEmail('');

    } catch (error) {
      console.error('Error al añadir la agrupacion', error);
    }
  };


    return(
      
        <div className={styles.cuerpo}>
         <h1 className={styles.titulo}>Agregar Agrupacion</h1>

        <div className={styles.containerGlobal}>
            <div className={styles.containerLeft}>
            <div className={styles.form}>
                <label htmlFor='nombre' className={styles.labels}>Nombre de la Agrupacion </label>
                <input type='string' id='nombre' value={nombre} onChange={handleNombre}></input>
            </div>
            <div className={styles.form}>
                <label htmlFor='mision' className={styles.labels}>Mision</label>
                <input type='string' id='mision' value={mision} onChange={handleMision}></input>
            </div>
            <div className={styles.form}>
                <label htmlFor='vision' className={styles.labels}>Vision</label>
                <input type='string' id='vision' value={vision} onChange={handleVision}></input>
            </div>
            </div>
            <div className={styles.containerRight}>
            <div className={styles.form}>
                <label htmlFor='instagram' className={styles.labels}>Instagram</label>
                <input  type='string' id='instagram' value={instagram} onChange={handleInstagram}></input>
            </div>
            <div className={styles.form}>
                <label htmlFor='email' className={styles.labels}>Email</label>
                <input  type='string' id='email' value={email} onChange={handleEmail}></input>
            </div>
            <div className={styles.form}>
            <Selector 
                className={styles.bigSelect}
                placeholder='Seleccionar Categoria'
                label="Seleccionar Categoria"
                options={categorias}
                value={selectedCategoria}
                changeValue={(event) => {
                  handleCategory({
                    target: { name: 'nombre', value: event.target.value },
                  });
                }}
              />
            </div>
            </div>   
        </div>
        <button className={styles.submit} onClick={onClick}>Agregar</button>
        </div>
    )
}