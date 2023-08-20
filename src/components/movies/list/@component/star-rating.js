import React from 'react';
import './star-rating.scss';

const StarRating = ({ rating }) => {
  const maxRating = 10;
  const maxStars = 5; 

  const ratingRatio = rating / maxRating;

  const filledStars = Math.round(ratingRatio * maxStars);
  const emptyStars = maxStars - filledStars;

  const filledStar = <span className="star">&#9733;</span>;
  const emptyStar = <span className="star">&#9734;</span>;

  return (
    <div className="star-rating">
      {Array(filledStars).fill(filledStar)}
      {Array(emptyStars).fill(emptyStar)}
    </div>
  );
};

export default StarRating;

