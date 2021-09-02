import { useContext, useEffect } from 'react';

import VehicleContext from 'context/VehicleContext';

import vehicleApi from 'services/vehiclesApi';

export default function useVehicle() {
  const { vehicles, setVehicles, currentId, setCurrentId } =
    useContext(VehicleContext);

  useEffect(() => {
    async function getAll() {
      const res = await vehicleApi.getAllVehicles();
      setVehicles(res);
    }
    getAll();
  }, []);

  const createOne = async data => {
    const res = await vehicleApi.createVehicle(data);
    setVehicles([...vehicles, res]);
  };

  const updateOne = async (id, data) => {
    const res = await vehicleApi.updateVehicle(id, data);
    setVehicles([...vehicles.map(v => (v.id === id ? res : v))]);
  };

  const deleteOne = async id => {
    await vehicleApi.deleteVehicle(id);
    setVehicles([...vehicles.filter(v => v.id !== id)]);
  };

  const deletePropertyFromVehicle = async (id, propertyId) => {
    await vehicleApi.deletePropertyFromVehicle(id, propertyId);
  };

  return {
    createOne,
    currentId,
    deleteOne,
    deletePropertyFromVehicle,
    setCurrentId,
    updateOne,
    vehicles,
  };
}
