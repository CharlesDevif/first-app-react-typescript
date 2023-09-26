import React, { useState } from "react";
import Chevron from "../assets/right-thin-chevron-svgrepo-com.svg"; 

interface MenuPropos {
  title: string;
  description: string;
  list: string[];
}

const MenuDeroulant: React.FC<MenuPropos> = ({ title, description, list }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="menu-deroulant-conteneur">
      <div className="head-menu-deroulant" onClick={toggleDescription}>
        <p>{title}</p>
        <img
          src={Chevron}
          alt=""
          className={isDescriptionVisible ? "clicked" : ""}
          
        />
      </div>
      <div
        className={`content-description ${isDescriptionVisible ? "visible" : ""}`}
      >
        <p>{description}</p>
        <ul>
          {list.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuDeroulant;
