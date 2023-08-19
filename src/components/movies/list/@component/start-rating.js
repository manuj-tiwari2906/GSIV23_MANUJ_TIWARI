import React from 'react';
import './start-rating.scss'; // Import the CSS file

const StarRating = ({ rating }) => {
  const maxRating = 10; // Total rating out of 10
  const roundedRating = Math.round(rating * 2) / 2; // Round to the nearest 0.5
  const filledStars = Math.round((roundedRating / maxRating) * 5);
  const emptyStars = 10 - filledStars;

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
