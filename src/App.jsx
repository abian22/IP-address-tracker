import React from "react";
import MapView from "./components/MapView/MapView";
import backgroundMobile from "../images/pattern-bg-mobile.png"
import "./App.css";

function App() {
  return (
    <>
    <div className="container">
      <img  className="backgroundMobile" src={backgroundMobile}/>
      <MapView />
      </div>
    </>
  );
}

export default App;
