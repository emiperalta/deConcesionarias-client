import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import useVehicle from 'hooks/useVehicle';

import style from 'utils/select-styles';

import './VehicleForm.css';

const animatedComponents = makeAnimated();

export default function VehicleForm({ currentId, properties, setCurrentId }) {
  const [name, setName] = useState('');
  const [vehicleProperties, setVehicleProperties] = useState([]);
  const [options, setOptions] = useState([]);

  const { createOne, vehicles, updateOne } = useVehicle();

  const actualVehicle = currentId ? vehicles.find(v => v.id === currentId) : null;

  useEffect(() => {
    if (actualVehicle) {
      setName(actualVehicle.name);
      setVehicleProperties(
        actualVehicle.VehicleProperties.map(vp => ({ value: vp.id, label: vp.name }))
      );
    }
  }, [actualVehicle]);

  useEffect(() => {
    if (properties.length) {
      setOptions(properties.map(p => ({ value: p.id, label: p.name })));
    }
  }, [properties]);

  const handleSubmit = e => {
    e.preventDefault();
    actualVehicle
      ? updateOne(currentId, { name, properties: vehicleProperties })
      : createOne({ name, properties: vehicleProperties });
    setName('');
    setVehicleProperties([]);
    setCurrentId(null);
  };

  const handleChange = e => setName(e.target.value);

  return (
    <div className='vehicle-form'>
      <h1 className='vehicle-form-title'>
        {actualVehicle ? 'Actualizar' : 'Registrar'} vehículo
      </h1>
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
            onChange={setVehicleProperties}
            options={options}
            styles={style}
            value={vehicleProperties}
          />
        </fieldset>
        <div className='actions'>
          <button className='btn btn-dec' type='submit'>
            {actualVehicle ? 'Actualizar' : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  );
}
