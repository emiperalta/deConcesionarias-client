import { Helmet } from 'react-helmet';

import VehicleForm from 'components/Vehicle/Form';
import VehicleList from 'components/Vehicle/List';

export default function VehiclePage() {
  return (
    <>
      <Helmet>
        <title>Vehículos - deConcesionarias</title>
        <meta name='description' content='vehículos deConcesionarias' />
      </Helmet>
      <VehicleForm />
      <VehicleList />
    </>
  );
}
