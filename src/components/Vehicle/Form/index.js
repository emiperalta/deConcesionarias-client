import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import useVehicle from 'hooks/useVehicle';

import alertService from 'services/Alerts';

import { validateVehicleInput } from 'validation/inputValidation';

import style from 'utils/select-styles';

import './VehicleForm.css';

const animatedComponents = makeAnimated();

export default function VehicleForm({ currentId, properties, setCurrentId }) {
  const [name, setName] = useState('');
  const [vehicleProperties, setVehicleProperties] = useState([]);
  const [options, setOptions] = useState([]);
  const [error, setError] = useState('');

  const { createOne, deletePropertyFromVehicle, vehicles, updateOne } = useVehicle();

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

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = { name, properties: vehicleProperties };
    const errors = await validateVehicleInput(formData);
    if (errors.length) return setError(errors[0]);
    if (actualVehicle) {
      updateOne(currentId, { name, properties: vehicleProperties });
      alertService.successAlert(
        'Vehículo <span class="text-info">actualizado</span>'
      );
    } else {
      createOne({ name, properties: vehicleProperties });
      alertService.successAlert('Vehículo <span class="text-success">creado</span>');
    }
    setName('');
    setVehicleProperties([]);
    setCurrentId(null);
    setError('');
  };

  const handleChange = e => setName(e.target.value);
  const handleSelect = async (e, { removedValue }) => {
    setVehicleProperties(e);
    if (actualVehicle && removedValue) {
      await deletePropertyFromVehicle(actualVehicle.id, removedValue.value);
    }
  };

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
            onChange={handleSelect}
            options={options}
            placeholder={'Seleccione'}
            styles={style}
            value={vehicleProperties}
          />
        </fieldset>
        {error && (
          <div className='error text-danger text-center'>
            {error.includes('category')
              ? 'Debe seleccionar una categoría'
              : 'El nombre no puede estar vacío'}
          </div>
        )}
        <div className='actions'>
          <button className='btn btn-dec' type='submit'>
            {actualVehicle ? 'Actualizar' : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  );
}
