import React from "react";
import api from "../../Services/ip";
import "./IpInfo.css";

function IpInfo() {
  return (
    <>
      <div
        style={{
          border: "solid",
          width: "270px",
          marginLeft: "20%",
          marginTop: "20%",
          zIndex: "9999",
          position: "absolute",
          textAlign: "center",
          color: "white",
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <span className="title">IP ADDRESS</span>
        <p className="content">192.212.174.101</p>
        <span className="title">LOCATION</span>
        <p className="content">Brooklyn, NY 10001</p>
        <span className="title">TIMEZONE</span>
        <p className="content">UTC-05:00</p>
        <span className="title">ISP</span>
        <p className="content">SpaceX Starlink</p>
      </div>
    </>
  );
}

export default IpInfo;
