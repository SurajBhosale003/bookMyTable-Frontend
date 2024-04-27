import { useState } from 'react';
import PropTypes from 'prop-types';
import './Component.css'
const RatingStars = ({ onChange }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onChange(value); // Pass the selected rating to the parent component
  };

  return (
    <h1 className='stars'>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={() => handleClick(value)}
          style={{ cursor: 'pointer', color: value <= rating ? 'gold' : 'grey' }}
        >
          ★
        </span>
      ))}
    </h1>
  );
};

RatingStars.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default RatingStars;
