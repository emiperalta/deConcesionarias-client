import { useEffect, useState } from 'react';
import Select from 'react-select';

import categoryApi from 'services/categoryApi';

import style from 'utils/select-styles';

import './PropertyForm.css';

export default function VehicleForm() {
  const [name, setName] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await categoryApi.getAllCategories();
      setOptions(
        data.map(category => ({ value: category.id, label: category.name }))
      );
    };
    fetchCategories();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: call create/update vehicle service
  };

  const handleChange = e => setName(e.target.value);

  return (
    <div className='property-form'>
      <h1 className='property-form-title'>Registrar propiedad de vehículo</h1>
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
          <legend>Categoría</legend>
          <Select options={options} styles={style} />
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
