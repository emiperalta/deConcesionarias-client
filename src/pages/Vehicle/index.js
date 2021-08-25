import { Helmet } from 'react-helmet';

import useVehicle from 'hooks/useVehicle';
import useProperty from 'hooks/useProperty';

import VehicleForm from 'components/Vehicle/Form';
import VehicleList from 'components/Vehicle/List';

export default function VehiclePage() {
  const { currentId, setCurrentId, vehicles } = useVehicle();
  const { properties } = useProperty();

  return (
    <>
      <Helmet>
        <title>Vehículos - deConcesionarias</title>
        <meta name='description' content='vehículos deConcesionarias' />
      </Helmet>
      <VehicleForm
        currentId={currentId}
        properties={properties}
        setCurrentId={setCurrentId}
      />
      <VehicleList vehicles={vehicles} setCurrentId={setCurrentId} />
    </>
  );
}
