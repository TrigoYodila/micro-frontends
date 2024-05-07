import React from "react";
import ReactDOM from "react-dom";
import Navbar from 'home/Navbar'
import "./index.scss";
import { calculateTaxe } from "./helpers/calculateTaxe"

const App = () => (
  <div className="">
    <Navbar />
    <p>Toto notification</p>
    <p>Taxe : {calculateTaxe(40,30)}</p>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
