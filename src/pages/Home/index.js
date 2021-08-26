import { Helmet } from 'react-helmet';

import Home from 'components/Home';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>La herramienta de gestión comercial para tu agencia de autos</title>
        <meta
          name='description'
          content='deConcesionarias El sistema de gestión comercial para concesionarias y agencia de autos para contribuir con toda tu operatoria diaria, acercándote negocios'
        />
      </Helmet>
      <Home />
    </>
  );
}
