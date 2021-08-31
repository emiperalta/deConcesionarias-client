import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import useVehicle from 'hooks/useVehicle';
import useProperty from 'hooks/useProperty';

import { pageAnimation, transition } from 'utils/animations';

import VehicleForm from 'components/Vehicle/Form';
import VehicleList from 'components/Vehicle/List';

export default function VehiclePage() {
  const { currentId, setCurrentId, vehicles } = useVehicle();
  const { properties } = useProperty();

  return (
    <motion.div
      animate='in'
      exit='out'
      initial='out'
      transition={transition}
      variants={pageAnimation}
    >
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
    </motion.div>
  );
}
