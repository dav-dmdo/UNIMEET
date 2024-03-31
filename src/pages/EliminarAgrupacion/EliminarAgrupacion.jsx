import styles from './EliminarAgrupacion.module.css';
import useGroups from '../../controllers/Hooks/useGroups';
import { Selector } from '../../componets/Selector/Selector';
import { useState } from 'react';
import { db } from '../../data/firebase';
import { collection, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

export default function EliminarAgrupacion(){
  const navigate = useNavigate();

    const groups = useGroups();
    const [agrupacion, setAgrupacion] = useState({nombre: '',});
    const [selectedGroup, setSelectedGroup] = useState(null);


//   const handleAgrupacion = (event) => {
//     const { name, value } = event.target;
//     setAgrupacion({
//       ...agrupacion,
//         [name]: value,
// }); 
// };

const handleAgrupacion = (event) => {
  const { name, value } = event.target;
  const foundGroup = findGroupByName(groups, value);
  setAgrupacion({
    ...agrupacion,
    [name]: value,
  });
  setSelectedGroup(foundGroup);
};

const handleEliminar = () => {
  // const foundGroup = findGroupByName(groups, agrupacion.nombre);
  // setSelectedGroup(foundGroup);
  console.log(selectedGroup)
  if (!selectedGroup){
    alert('Por favor seleccione una agrupación a eliminar')
    return;
  }

  else if (selectedGroup.integrantes.length === 0){
    alert('Por favor recuerde que las agrupaciones a eliminar no pueden tener integrantes activos')
    return;
  }

  deleteGroup(selectedGroup);

  console.log(selectedGroup.integrantes)  
};

async function deleteGroup (group){
  try {
    //const documentoRef = db.collection('agrupaciones').doc(titulo);
    const documentoRef = doc(collection(db, 'agrupaciones'), group.nombre);
    const documento = await getDoc(documentoRef);

    if (!documento.exists) {
      throw new Error('El documento no existe.');
    }

    

    
    await deleteDoc(documentoRef);

    console.log('Documento eliminado correctamente.');
    alert('Agrupación eliminada con éxito')
    navigate('/HomeAdmin')
    return true;
  } catch (error) {
    console.error('Error al actualizar el documento:', error);
    return false;
  }


}

 
function findGroupByName(groups, selectedAgrupacion) {
  return groups.find((group) => group.nombre.toLowerCase() === selectedAgrupacion.toLowerCase());
}
    
    
    return(

        <div className={styles.cuerpo}>
            <h1 className={styles.titulo}>Eliminar Agrupacion</h1>
            <Selector
                className={styles.seleccionar}
                placeholder='Seleccionar'
                label="Seleccionar Agrupación a Eliminar: "
                options={groups}
                changeValue={(event) => {
                  handleAgrupacion({
                    target: { name: 'nombre', value: event.target.value },
                  });
                }}
              />

        <button className={styles.submit} onClick={handleEliminar}>Eliminar</button>

        </div>
    )
    
}