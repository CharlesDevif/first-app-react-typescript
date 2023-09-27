import { useState } from "react";
import { Location } from "../interface/location";
import Chevron from "../assets/right-thin-chevron-svgrepo-com.svg";

interface CarouselPropos {
  pictures: Location["pictures"];
}

export function Carousel(props: CarouselPropos) {
  const [picture, setPicture] = useState(0);
  const handleNext = () => {
    if (picture >= props.pictures.length - 1) {
      setPicture(0);
    } else {
      setPicture(picture + 1);
    }
  };
  const handlePrev = () => {
    if (picture <= 0) {
      setPicture(props.pictures.length - 1);
    } else {
      setPicture(picture - 1);
    }
  };
  return (
    <div className="carousel" style={{ backgroundImage: `url(${props.pictures[picture]})` }}>
      <div className="conteneur-slide-btn">
        <div className="slideNext" onClick={handleNext}>
          <img src={Chevron} alt="" />
        </div>
        <div className="slidePrev" onClick={handlePrev}>
          <img src={Chevron} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
