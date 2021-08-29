import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

import propertyApi from 'services/propertyApi';

import './RatingStar.css';

export default function RatingStar({ initialValue, propertyId, vehicleId }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    initialValue && setRating(initialValue);
  }, [initialValue]);

  const handleClick = async ratingValue => {
    setRating(ratingValue);
    await propertyApi.updatePropertyValue(propertyId, vehicleId, ratingValue);
  };

  return (
    <div className='star-container'>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={ratingValue}>
            <input
              name='ratingStar'
              onClick={() => handleClick(ratingValue)}
              type='radio'
              value={ratingValue}
            />
            <FaStar
              className='star'
              color={ratingValue <= (hover || rating) ? '#fb0' : '#bbb'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              size={18}
            />
          </label>
        );
      })}
    </div>
  );
}
