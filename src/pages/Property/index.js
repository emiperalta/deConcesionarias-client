import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import useProperty from 'hooks/useProperty';

import { pageAnimation, transition } from 'utils/animations';

import PropertyForm from 'components/Property/Form';
import PropertyList from 'components/Property/List';

export default function PropertyPage() {
  const { properties, currentId, setCurrentId } = useProperty();

  return (
    <motion.div
      animate='in'
      exit='out'
      initial='out'
      transition={transition}
      variants={pageAnimation}
    >
      <Helmet>
        <title>Propiedades de vehículos - deConcesionarias</title>
        <meta
          name='description'
          content='propiedades de vehículos deConcesionarias'
        />
      </Helmet>
      <PropertyForm currentId={currentId} setCurrentId={setCurrentId} />
      <PropertyList properties={properties} setCurrentId={setCurrentId} />
    </motion.div>
  );
}
