import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'wouter';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

import propertyApi from 'services/propertyApi';

import useCategory from 'hooks/useCategory';

import RatingStar from 'components/RatingStar';

import './VehicleDetails.css';

export default function VehicleDetails({ vehicle, vehicleId }) {
  const [propertiesToShow, setPropertiesToShow] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { categories } = useCategory();

  useEffect(() => {
    async function getProperties() {
      const data = await propertyApi.getPropertiesToShow(vehicleId, 1);
      setPropertiesToShow(data);
      setSelectedCategory(1);
    }
    getProperties();
  }, [vehicleId]);

  const handleCategoryClick = (e, categoryId) => {
    async function getProperties() {
      const data = await propertyApi.getPropertiesToShow(vehicleId, categoryId);
      setPropertiesToShow(data);
      setSelectedCategory(categoryId);
    }
    getProperties();
  };

  return (
    <Container>
      <Container className='mt-5 mb-4'>
        <h2>
          Detalles de vehículo: <span className='vehicle-name'>{vehicle.name}</span>
        </h2>
      </Container>
      <Container className='mt-3 vehicle-details'>
        <div className='card'>
          <div className='card-body'>
            <ul className='nav flex-column nav-pills h-scroll'>
              {categories.length &&
                categories.map(cat => (
                  <div
                    className={`nav-item ${
                      selectedCategory === cat.id ? 'selected' : ''
                    }`}
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
        {propertiesToShow.length ? (
          <div className='vehicle-details-container'>
            {propertiesToShow.map(prop => (
              <div key={prop.id} className='vehicle-properties-detail'>
                <p>{prop.name}</p>
                <RatingStar
                  initialValue={prop.Vehicles[0].PropertyValue.value}
                  propertyId={prop.id}
                  vehicleId={vehicle.id}
                />
              </div>
            ))}
          </div>
        ) : (
          <section className='no-properties text-center'>
            ¡No hay ninguna propiedad en esta categoría!
          </section>
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
