import { Helmet } from 'react-helmet';

import useProperty from 'hooks/useProperty';

import PropertyForm from 'components/Property/Form';
import PropertyList from 'components/Property/List';

export default function PropertyPage() {
  const { properties, currentId, setCurrentId } = useProperty();

  return (
    <>
      <Helmet>
        <title>Propiedades de vehículos - deConcesionarias</title>
        <meta
          name='description'
          content='propiedades de vehículos deConcesionarias'
        />
      </Helmet>
      <PropertyForm currentId={currentId} setCurrentId={setCurrentId} />
      <PropertyList properties={properties} setCurrentId={setCurrentId} />
    </>
  );
}
