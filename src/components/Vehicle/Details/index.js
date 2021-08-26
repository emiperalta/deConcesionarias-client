import { Container } from 'react-bootstrap';
import { Link } from 'wouter';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

import useCategory from 'hooks/useCategory';

import './VehicleDetails.css';

export default function VehicleDetails({ vehicle }) {
  const { categories } = useCategory();

  return (
    // TODO: fix this
    <Container>
      <Container className='mt-5'>
        <div className='card'>
          <div className='card-body'>
            <ul className='nav flex-column nav-pills'>
              {categories.length &&
                categories.map(cat => (
                  <div className='nav-item' title={`${cat.name}`} key={cat.id}>
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
      <Container className='vehicle-details'>
        {Object.keys(vehicle).length &&
          vehicle.VehicleProperties.map((v, index) => (
            <section key={v.id} className='vehicle-properties-detail'>
              <span>{v.name}</span>
              <span>{v.PropertyValue.value} stars</span>
            </section>
          ))}
      </Container>
      <div className='container back-arrow'>
        <Link to='/vehicles'>
          <FaRegArrowAltCircleLeft />
        </Link>
      </div>
    </Container>
  );
}
