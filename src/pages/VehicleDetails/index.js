import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import useSingleVehicle from 'hooks/useSingleVehicle';

import { pageAnimation, transition } from 'utils/animations';

import VehicleDetails from 'components/Vehicle/Details';

export default function VehicleDetailsPage(props) {
  const { id } = props.params;

  const { vehicle } = useSingleVehicle(Number(id));

  return (
    <motion.div
      animate='in'
      exit='out'
      initial='out'
      transition={transition}
      variants={pageAnimation}
    >
      <Helmet>
        <title>Detalles - deConcesionarias</title>
        <meta name='description' content='Detalles de auto' />
      </Helmet>
      <VehicleDetails vehicle={vehicle} vehicleId={id} />
    </motion.div>
  );
}
