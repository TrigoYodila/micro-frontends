import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Navbar from "./components/Navbar/Navbar";
import { calculateTaxe } from "notification/calculateTaxe"

const App = () => (
  <div className="">
    <Navbar />
    <p>Taxe home {calculateTaxe(50,10)}</p>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
