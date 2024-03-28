import React, { useState } from 'react';
import { db } from '../../data/firebase';
import { addDoc, collection } from 'firebase/firestore';
import useGroups from '../../controllers/Hooks/useGroups';

export const MultipleSelector = ({ onSelect }) => {
  const agrupaciones = useGroups();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [categoriaName, setCategoriaName] = useState('');

  const handleOptionChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter(option => option !== value));
    }
  };

  const handleSubmit = async () => {
    try {
      const data = {
        nombre: categoriaName,
        agrupaciones: selectedOptions
      };
      const categoriasCollectionRef = collection(db, 'categorias');
      await addDoc(categoriasCollectionRef, data);
      console.log('Data saved successfully:', data);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  // Callback to pass selected options to parent component
  React.useEffect(() => {
    onSelect(selectedOptions);
  }, [selectedOptions]);

  if (!agrupaciones) {
    return <div>Loading...</div>; // Add a loading indicator or message
  }

  return (
    <div>
      <div>
        
      </div>
      <div>
        {agrupaciones.map((option, index) => (
          <div key={index}>
            <input
              type="checkbox"
              value={option.nombre}
              onChange={handleOptionChange}
            />
            <label>{option.nombre}</label>
          </div>
        ))}
      </div>
      
    </div>
  );
};


