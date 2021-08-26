import { Helmet } from 'react-helmet';

import useSingleVehicle from 'hooks/useSingleVehicle';

import VehicleDetails from 'components/Vehicle/Details';

export default function VehicleDetailsPage(props) {
  const { id } = props.params;

  const { vehicle } = useSingleVehicle(Number(id));

  return (
    <>
      <Helmet>
        <title>Detalles - deConcesionarias</title>
        <meta name='description' content='Detalles de auto' />
      </Helmet>
      <VehicleDetails vehicle={vehicle} />
    </>
  );
}
