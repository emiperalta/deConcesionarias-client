import { useEffect, useState } from 'react';
import vehicleApi from 'services/vehiclesApi';

export default function useSingleVehicle(id) {
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    async function fetchSingleVehicle() {
      const data = await vehicleApi.getOneVehicle(id);
      setVehicle(data);
    }
    fetchSingleVehicle();
  }, [id]);

  return {
    vehicle,
    setVehicle,
  };
}
