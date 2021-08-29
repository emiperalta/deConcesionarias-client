import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

import './RatingStar.css';

export default function RatingStar({ initialValue, propertyId, vehicleId }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    initialValue && setRating(initialValue);
  }, [initialValue]);

  const handleClick = ratingValue => {
    setRating(ratingValue);
    fetch(
      `http://localhost:5000/api/vehicle-properties/${propertyId}?vehicleId=${vehicleId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ratingValue }),
      }
    )
      .then(res => res.json())
      .then(data => console.log({ data }))
      .catch(err => console.log({ error: err.message }));
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
