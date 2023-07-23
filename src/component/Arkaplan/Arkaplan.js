import React from "react";
import ResimCek from "./ResimCek";
// import Cloud from "../images/Cloud.JPG";
import "./../../App.css";

export default function Arkaplan(arkaplan) {
  return (
    <div className="arkaplan">
      <div className="overlay"></div>
      <ResimCek durum={arkaplan} />
    </div>
  );
}
