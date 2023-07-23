import React from "react";
import { useState } from "react";

import Arkaplan from "./component/Arkaplan/Arkaplan";
import Arama from "./component/Arama/Arama";
import Sonuc from "./component/Somuc/Sonuc";

import "./App.css";

function App() {
  const [havaDurumu, setHavaDurmu] = useState({});
  return (
    <section className="uygulama">
      <Arkaplan Arkaplan={havaDurumu.weather && havaDurumu.weather[0].main} />
      <p id="baslik">Hava Durumu</p>
      <Arama setHavaDurmu={setHavaDurmu} />
      <Sonuc hava={havaDurumu} />
    </section>
  );
}

export default App;
