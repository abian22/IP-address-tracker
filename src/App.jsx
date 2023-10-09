import React from "react";
import MapView from "./components/MapView/MapView";
import arrow from "../images/icon-arrow.svg";
import IpInfo from "./components/IpInfo/IpInfo";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <span className="IpTittle">IP Address Tracker</span>
        <div className="inputContainer">
          <input
            className="IpSearch"
            placeholder="Search for any IP addres or domain"
          />
          <div className="arrowContainer">
            <img src={arrow} />
          </div>
        </div>
        <IpInfo/>
        <MapView />
      </div>
    </>
  );
}

export default App;
