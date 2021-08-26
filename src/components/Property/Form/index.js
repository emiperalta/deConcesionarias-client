import { useEffect, useState } from 'react';
import Select from 'react-select';

import useProperty from 'hooks/useProperty';
import useCategory from 'hooks/useCategory';

import style from 'utils/select-styles';

import './PropertyForm.css';

export default function PropertyForm({ currentId, setCurrentId }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState(null);

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

  const handleSubmit = e => {
    e.preventDefault();
    actualProperty
      ? updateOne(currentId, { name, categoryId: category.value })
      : createOne({ name, categoryId: category.value });
    setName('');
    setCategory(null);
    setCurrentId(null);
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
        <div className='actions'>
          <button className='btn btn-dec' type='submit'>
            {actualProperty ? 'Actualizar' : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  );
}
