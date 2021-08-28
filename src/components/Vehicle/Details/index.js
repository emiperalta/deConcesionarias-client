import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'wouter';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

import useCategory from 'hooks/useCategory';

import './VehicleDetails.css';

export default function VehicleDetails({ vehicle }) {
  const [propertiesToShow, setPropertiesToShow] = useState([]);

  const { categories } = useCategory();

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/vehicle-properties?vehicleId=${vehicle.id}&categoryId=1`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPropertiesToShow(data);
      })
      .catch(err => console.log(err));
  }, [vehicle.id]);

  const handleCategoryClick = (e, categoryId) => {
    fetch(
      `http://localhost:5000/api/vehicle-properties?vehicleId=${vehicle.id}&categoryId=${categoryId}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPropertiesToShow(data);
      })
      .catch(err => console.log(err));

    // GET propiedades del vehicleId que sean de esta categoryId

    // console.log(vehicle.VehicleProperties[0].Category.id);
  };

  return (
    // TODO: fix this
    <Container>
      <Container className='mt-5'>
        <div className='card'>
          <div className='card-body'>
            <ul className='nav flex-column nav-pills'>
              {categories.length &&
                categories.map(cat => (
                  <div
                    className='nav-item'
                    key={cat.id}
                    onClick={e => handleCategoryClick(e, cat.id)}
                    title={`${cat.name}`}
                  >
                    <section className='categories-header'>
                      <img src={cat.icon} alt={cat.name} />
                      <span>{cat.name.toUpperCase()}</span>
                    </section>
                  </div>
                ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* <Container className='vehicle-details'>
        {Object.keys(vehicle).length &&
          vehicle.VehicleProperties.map((v, index) => (
            <section key={v.id} className='vehicle-properties-detail'>
              <span>{v.name}</span>
              <span>{v.PropertyValue.value} stars</span>
            </section>
          ))}
      </Container> */}

      <Container className='vehicle-details'>
        {propertiesToShow.length ? (
          propertiesToShow.map((prop, index) => (
            <section key={prop.id} className='vehicle-properties-detail'>
              <span>{prop.name}</span>
              <span>{prop.Vehicles[0].PropertyValue.value} stars</span>
            </section>
          ))
        ) : (
          <section>¡No hay ninguna propiedad en esta categoría!</section>
        )}
      </Container>

      <div className='container back-arrow'>
        <Link to='/vehicles'>
          <FaRegArrowAltCircleLeft />
        </Link>
      </div>
    </Container>
  );
}
