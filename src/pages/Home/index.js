import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import { pageAnimation, transition } from 'utils/animations';

import Home from 'components/Home';

export default function HomePage() {
  return (
    <motion.div
      animate='in'
      exit='out'
      initial='out'
      transition={transition}
      variants={pageAnimation}
    >
      <Helmet>
        <title>La herramienta de gestión comercial para tu agencia de autos</title>
        <meta
          name='description'
          content='deConcesionarias El sistema de gestión comercial para concesionarias y agencia de autos para contribuir con toda tu operatoria diaria, acercándote negocios'
        />
      </Helmet>
      <Home />
    </motion.div>
  );
}
