import { Helmet } from 'react-helmet';

import PropertyForm from 'components/Property/Form';
import PropertyList from 'components/Property/List';

export default function PropertyPage() {
  return (
    <>
      <Helmet>
        <title>Propiedades de vehículos - deConcesionarias</title>
        <meta
          name='description'
          content='propiedades de vehículos deConcesionarias'
        />
      </Helmet>
      <PropertyForm />
      <PropertyList />
    </>
  );
}
