import React from "react";
import { Link } from "react-router-dom";
import { Location } from "../interface/location";

interface CardProps {
  location: Location;
}

const Card: React.FC<CardProps> = ({ location }) => {
  return (
    <Link to={`/location/${location.id}`} className="card-body" style={{ backgroundImage: `url(${location.cover})` }}>
      <div className="p-card">
        <p>{location.title}</p>
      </div>
    </Link>
  );
};

export default Card;
