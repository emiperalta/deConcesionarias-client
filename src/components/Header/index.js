import { Link } from 'wouter';

import './Header.css';

export default function Header() {
  return (
    <>
      <header className='header'>
        <img
          alt='deConcesionaria'
          src='https://deconcesionarias.com.ar/wp-content/uploads/2021/04/deconcesionarias-logo-white.svg'
        />
        <section className='header-links'>
          <Link to='/vehicles'>Vehículos</Link>
          <Link to='/properties'>Propiedades de vehículos</Link>
        </section>
      </header>
    </>
  );
}
