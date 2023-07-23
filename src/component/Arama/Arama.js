import React from "react";
import { useState } from "react";

export default function Arama({ setHavaDurmu }) {
  const api = {
    key: "02d6527bd47d3457e704549808ed6774",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [ara, setAra] = useState("");

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}?q=${ara}&units=metric&lang=tr&appid=${api.key}`)
        .then((veri) => veri.json())
        .then((Sonuc) => {
          setAra("");
          setHavaDurmu(Sonuc);
        });
    }
  };


  return (
    <div className="arama">
      <input
        className="arama-input"
        type="text"
        placeholder="Şehir"
        onChange={(e) => setAra(e.target.value)}
        value={ara}
        onKeyPress={search}
      ></input>
    </div>
  );
}
