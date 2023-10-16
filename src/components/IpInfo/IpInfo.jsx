import React from "react";
import MapView from "../MapView/MapView";
import "./IpInfo.css";

function IpInfo({ip, location, timezone, isp}) {

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop:"220px"

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
          <p className="content">{ip}</p>
          <span className="title" style={{ margin: "5px 0", }}>LOCATION</span>
          <p className="content" >{location}</p>
          <span className="title" style={{ margin: "5px 0" }}>TIMEZONE</span>
          <p className="content" >{timezone}</p>
          <span className="title">ISP</span>
          <p className="content">{isp}</p>
        </div>
      </div>
    </>
  );
}

export default IpInfo;
