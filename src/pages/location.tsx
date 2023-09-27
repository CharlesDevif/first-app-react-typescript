import { useParams } from "react-router-dom";
import { Location } from "../interface/location";
import locations from "../api/kasa.json";
import { useEffect, useState } from "react";
import Rating from "../components/rating";
import MenuDeroulant from "../components/menuDeroulant";
import Carousel from "../components/carousel";

export function LocationPage() {
  const { id } = useParams();

  const [location, setLocation]: [Location, (e: Location) => void] = useState({
    id: "",
    title: "",
    cover: "",
    pictures: [],
    description: "",
    host: {
      name: "",
      picture: "",
    },
    rating: "",
    location: "",
    equipments: [],
    tags: [],
  } as Location);

  useEffect(() => {
    const l = locations.find((elem) => elem.id === id);
    if (l) {
      setLocation(l);
    }
  });

  return (
    <div className="page-location">
         <Carousel pictures={location.pictures}></Carousel>
      <div className="location-info-conteneur">
        <div className="conteneur-div-info">
          <div className="conteneur-info-left">
            <h2 className="title-location">{location.title}</h2>
            <p className="localisation-location">{location.location}</p>
            <div>
              {location.tags.map((tag, index) => (
                <span className="tags" key={index}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="conteneur-info-right">
            <div className="host-conteneur">
              <p className="host-location">{location.host.name}</p>
              <img src={location.host.picture} alt="" />
            </div>
            <div className="rate-location">
              <Rating rating={location.rating} />
            </div>
          </div>
        </div>
        <div className="conteneur-menu-location">

        <MenuDeroulant
          title="Description"
          description={location.description}
          list={[]}
        ></MenuDeroulant>
        <MenuDeroulant
          title="Equipements"
          description={""}
          list={location.equipments}
        ></MenuDeroulant>
        </div>


      </div>
    </div>
  );
}

export default LocationPage;
