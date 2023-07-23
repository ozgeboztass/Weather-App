import React from "react";

import Cloud from "../images/Cloud.JPG";
import rainbow from "../images/rainbow.jpeg";
import foggy from "../images/foggy.jpeg";
import rainy from "../images/rainy.jpeg";
import snowy from "../images/snowy.jpeg";
import storm from "../images/storm.jpeg";
import sunny from "../images/sunny.jpeg";

function ResimCek({ durum }) {
  console.log(durum);
  switch (durum.Arkaplan) {
    case "rainbow":
      return <img className="arkaplan-resim" src={rainbow} alt="rainbow"></img>;

    case "Clouds":
      return <img className="arkaplan-resim" src={Cloud} alt="Cloud"></img>;

    case "Drizzle":
      return <img className="arkaplan-resim" src={rainy} alt="rainy"></img>;

    case "Mist":
      return <img className="arkaplan-resim" src={foggy} alt="foggy"></img>;

    case "Rain":
      return <img className="arkaplan-resim" src={rainy} alt="rainy"></img>;

    case "Snow":
      return <img className="arkaplan-resim" src={snowy} alt="snowy"></img>;

    case "Storm":
      return <img className="arkaplan-resim" src={storm} alt="storm"></img>;

    case "Clear":
      return <img className="arkaplan-resim" src={sunny} alt="sunny"></img>;
    default:
      return <img className="arkaplan-resim" src={rainy} alt="rainy"></img>;
  }
}

export default ResimCek;
