import { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import PropertyContext from 'context/PropertyContext';

import style from 'utils/select-styles';

import './VehicleForm.css';

const animatedComponents = makeAnimated();

export default function VehicleForm() {
  const [name, setName] = useState('');
  const [options, setOptions] = useState([]);

  const { properties } = useContext(PropertyContext);

  useEffect(() => {
    if (properties.length) {
      setOptions(properties.map(p => ({ value: p.id, label: p.name })));
    }
  }, [properties]);

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: call create/update vehicle service
  };

  const handleChange = e => setName(e.target.value);

  return (
    <div className='vehicle-form'>
      <h1 className='vehicle-form-title'>Registrar vehículo</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Nombre</legend>
          <input
            className='input-field'
            onChange={handleChange}
            type='text'
            value={name}
          />
        </fieldset>
        <fieldset>
          <legend>Propiedades</legend>
          <Select
            components={animatedComponents}
            isMulti
            options={options}
            styles={style}
          />
        </fieldset>
        <div className='actions'>
          <button className='btn btn-dec' type='submit'>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
