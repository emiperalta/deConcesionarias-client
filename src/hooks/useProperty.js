import { useContext, useEffect } from 'react';

import PropertyContext from 'context/PropertyContext';

import propertyApi from 'services/propertyApi';

export default function useProperty() {
  const { properties, setProperties, currentId, setCurrentId } =
    useContext(PropertyContext);

  useEffect(() => {
    async function getAll() {
      const res = await propertyApi.getAllProperties();
      setProperties(res);
    }
    getAll();
  }, []);

  const createOne = async data => {
    const res = await propertyApi.createProperty(data);
    setProperties([...properties, res]);
  };

  const updateOne = async (id, data) => {
    const res = await propertyApi.updateProperty(id, data);
    console.log(res);
    setProperties([...properties.map(p => (p.id === id ? res : p))]);
  };

  const deleteOne = async id => {
    await propertyApi.deleteProperty(id);
    setProperties([...properties.filter(p => p.id !== id)]);
  };

  return {
    createOne,
    currentId,
    deleteOne,
    setCurrentId,
    updateOne,
    properties,
  };
}
