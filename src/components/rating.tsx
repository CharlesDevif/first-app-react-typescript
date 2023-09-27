import React from "react";

interface RatingProps {
  rating: string; // Note stockée en tant que chaîne de caractères
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  // Convertir la note en nombre
  const numericRating = parseFloat(rating);
  const maxRating = 5; // Note maximale

  // Assurez  que la conversion a réussi avant d'utiliser la note
  if (isNaN(numericRating) || numericRating < 0 || numericRating > maxRating) {
    return <div className="rating">Invalid Rating</div>;
  }


  const starSize = 35; 
  const starColor = "#e63d3d"

 
  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    if (i <= numericRating) {
      stars.push(
        <svg
          key={i}
          width={starSize}
          height={starSize}
          viewBox="0 0 24 24"
          fill={starColor}
        >
          <path
            d="M12 2l1.732 5.236h5.6l-4.5 3.472 1.732 5.236-4.533-3.464-4.5 3.464 1.732-5.236-4.5-3.472h5.6z"
            fill={starColor}
          />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          width={starSize}
          height={starSize}
          viewBox="0 0 24 24"
          fill="#D3D3D3" 
        >
          <path
            d="M12 2l1.732 5.236h5.6l-4.5 3.472 1.732 5.236-4.533-3.464-4.5 3.464 1.732-5.236-4.5-3.472h5.6z"
            fill="#D3D3D3"
          />
        </svg>
      );
    }
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
