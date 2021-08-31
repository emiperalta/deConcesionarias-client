import { useEffect, useState } from 'react';
import Select from 'react-select';

import useProperty from 'hooks/useProperty';
import useCategory from 'hooks/useCategory';

import alertService from 'services/Alerts';

import { validatePropertyInput } from 'validation/inputValidation';

import style from 'utils/select-styles';

import './PropertyForm.css';

export default function PropertyForm({ currentId, setCurrentId }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState(null);
  const [error, setError] = useState('');

  const { categoriesForSelect } = useCategory();
  const { createOne, properties, updateOne } = useProperty();

  const actualProperty = currentId ? properties.find(p => p.id === currentId) : null;

  useEffect(() => {
    if (actualProperty) {
      setName(actualProperty.name);
      setCategory({
        value: actualProperty.CategoryId,
        label: actualProperty.Category.name,
      });
    }
  }, [actualProperty]);

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = { name, category };
    const errors = await validatePropertyInput(formData);
    if (errors.length) return setError(errors[0]);
    if (actualProperty) {
      updateOne(currentId, { name, categoryId: category.value });
      alertService.successAlert(
        'Propiedad <span class="text-info">actualizada</span>'
      );
    } else {
      createOne({ name, categoryId: category.value });
      alertService.successAlert(
        'Propiedad <span class="text-success">creada</span>'
      );
    }
    setName('');
    setCategory(null);
    setCurrentId(null);
    setError('');
  };

  const handleChange = e => setName(e.target.value);

  return (
    <div className='property-form'>
      <h1 className='property-form-title'>
        {actualProperty ? 'Actualizar' : 'Registrar'} propiedad de vehículo
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
          <legend>Categoría</legend>
          <Select
            options={categoriesForSelect}
            onChange={setCategory}
            placeholder={'Seleccione'}
            styles={style}
            value={category}
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
            {actualProperty ? 'Actualizar' : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  );
}
