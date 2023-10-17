import React, { useState, useEffect, useRef } from "react";
import MapView from "./components/MapView/MapView";
import arrow from "../images/icon-arrow.svg";
import IpInfo from "./components/IpInfo/IpInfo";
import { getMyIp, getOneIp } from "./Services/ip";
import "./App.css";

function App() {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [newIp, setNewIp] = useState("");
  const [isp, setIsp] = useState("");
  const mapRef = useRef(null);

  useEffect(() => {
    if (lat === null || lng === null) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLat(latitude);
        setLng(longitude);
        mapRef.current.setView([latitude, longitude]);
      });
    }
  }, [mapRef, lat, lng]);

  useEffect(() => {
    getIp();
  }, []);

  useEffect(() => {
    if (ip) {
      getTheIp();
    }
  }, [ip]);

  const getIp = async () => {
    const result = await getMyIp();
    setIp(result.data.ip)
    setLat(result.data.latitude);
    setLng(result.data.longitude);
    setLocation(
      result.data.city + " " + result.data.region + " " + result.data.postal
    );
    setTimezone(result.data.timezone);
    setIsp(result.data.org);
  }

  const getTheIp = async () => {
    try {
      const result = await getOneIp(ip);
      setIp(result.data.ip);

      if (result.data.latitude && result.data.longitude) {
        setLat(result.data.latitude);
        setLng(result.data.longitude);
        mapRef.current.setView([result.data.latitude, result.data.longitude]);
      }

      setLocation(
        result.data.city + " " + result.data.region + " " + result.data.postal
      );
      setTimezone(result.data.timezone);
      setIsp(result.data.org);
    } catch (error) {
      console.error("Error al obtener datos de IP:", error);
    }
  };

  function searchIp() {
    const ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

    if (ipRegex.test(newIp)) {
      setIp(newIp);
    } else {
      console.error("La IP no es válida");
    }
  }

  return (
    <div className="container">
      <span className="IpTittle">IP Address Tracker</span>
      <div className="inputContainer">
        <input
          className="IpSearch"
          placeholder="Search for any IP address or domain"
          value={newIp}
          onChange={(e) => setNewIp(e.target.value)}
        />
        <div className="arrowContainer" onClick={searchIp}>
          <img src={arrow} alt="Search" />
        </div>
      </div>
      <IpInfo ip={ip} location={location} timezone={timezone} isp={isp} />
      <MapView lat={lat} lng={lng} mapRef={mapRef} />
    </div>
  );
}

export default App;
