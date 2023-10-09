import React from "react";
import MapView from "./components/MapView/MapView";
import backgroundMobile from "../images/pattern-bg-mobile.png";
import arrow from "../images/icon-arrow.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <span
          style={{
            fontFamily: "Bold",
            color: "white",
            position: "absolute",
            left: 0,
            right: 0,
            margin: "auto",
            textAlign: "center",
            width: "fit-content",
            marginTop: "20px",
            fontSize: "24px",
          }}
        >
          IP Address Tracker
        </span>
        <div
          style={{
            position: "absolute",
            borderRadius: "10px",
            left: 0,
            right: 0,
            margin: "auto",
            textAlign: "start",
            width: "300px",
            height: "50px",
            top: "70px",
          }}
        >
          <input
          placeholder="Search for any IP addres or domain"
            style={{
              position: "relative",
              borderRadius: "10px",
              left: 0,
              right: 0,
              margin: "auto",
              textAlign: "start",
              width: "215px",
              height: "50px",
              fontFamily:"regular",
              fontSize:"20px",
              paddingLeft:"15px",
            }}
          />
          <div
            style={{
              height: "53px",
              width: "70px",
              backgroundColor: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              marginLeft: "10px",
              right: 10,
              marginTop: "82px",
              zIndex: "999",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              top: "-82px",
            }}
          >
            <img
              src={arrow}
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
              }}
            />
          </div>
        </div>
        <img className="backgroundMobile" src={backgroundMobile} />
        <MapView />
      </div>
    </>
  );
}

export default App;
