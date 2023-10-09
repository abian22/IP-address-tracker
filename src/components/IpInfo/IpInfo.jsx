import React from "react";
import api from "../../Services/ip";
import "./IpInfo.css";

function IpInfo() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"200px"

        }}
      >
        <div
          style={{
            border: "solid",
            width: "270px",
            justifyContent: "center",
            zIndex: "9999",
            position: "absolute",
            textAlign: "center",
            color: "white",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
      <span className="title" style={{ margin: "5px 0" }}>IP ADDRESS</span>
          <p className="content">192.212.174.101</p>
          <span className="title" style={{ margin: "5px 0", }}>LOCATION</span>
          <p className="content" >Brooklyn, NY 10001</p>
          <span className="title" style={{ margin: "5px 0" }}>TIMEZONE</span>
          <p className="content" >UTC-05:00</p>
          <span className="title">ISP</span>
          <p className="content">SpaceX Starlink</p>
        </div>
      </div>
    </>
  );
}

export default IpInfo;
