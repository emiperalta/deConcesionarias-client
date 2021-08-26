import { Link } from 'wouter';

import './Header.css';

export default function Header() {
  return (
    <>
      <header className='header'>
        <Link to='/'>
          <img
            alt='deConcesionaria'
            className='brand'
            src='https://deconcesionarias.com.ar/wp-content/uploads/2021/04/deconcesionarias-logo-white.svg'
          />
        </Link>
        <section className='header-links'>
          <Link to='/vehicles'>Vehículos</Link>
          <Link to='/properties'>Propiedades de vehículos</Link>
        </section>
      </header>
    </>
  );
}
