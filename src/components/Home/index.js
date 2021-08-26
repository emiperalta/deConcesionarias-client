import './Home.css';

export default function Home() {
  return (
    <div>
      <section className='main-section'>
        <section className='title-section'>
          <h1>El giro que tu concesionsaria necesita</h1>
        </section>
        <img
          src='https://deconcesionarias.com.ar/wp-content/uploads/2021/04/dc-hero-home-a.png'
          alt='vehiculo deConcesionarias'
        />
      </section>
      <section className='description-container'>
        <div className='description-section'>
          <p>
            La plataforma más completa con herramientas para optimizar tu
            concesionaria, integrando procesos y tecnología en una experiencia
            intuitiva.
          </p>
        </div>
      </section>
    </div>
  );
}
