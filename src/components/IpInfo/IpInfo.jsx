import React from "react";
import "./IpInfo.css";

function IpInfo({ ip, location, timezone, isp }) {

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "220px"
        }}
      >
        <div
          className="infoContainer">
          <div className="titleContentContainer">
            <span className="title" style={{ margin: "5px 0" }}>IP ADDRESS</span>
            <p className="content">{ip}</p>
          </div>
          <div className="divider" />
          <div className="titleContentContainer">
            <span className="title" style={{ margin: "5px 0", }}>LOCATION</span>
            <p className="content" >{location}</p>
          </div>
          <div className="divider" />
          <div className="titleContentContainer">
            <span className="title" style={{ margin: "5px 0" }}>TIMEZONE</span>
            <p className="content" >{timezone}</p>
          </div>
          <div className="divider" />
          <div className="titleContentContainer">
            <span className="title">ISP</span>
            <p className="content">{isp}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IpInfo;
