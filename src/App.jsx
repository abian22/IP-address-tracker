import React, { useState, useEffect, useRef } from "react";
import MapView from "./components/MapView/MapView";
import arrow from "../images/icon-arrow.svg";
import IpInfo from "./components/IpInfo/IpInfo";
import getIp from "./Services/ip";
import "./App.css";

function App() {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [newIp, setNewIp] = useState("");
  const [isp, setIsp] = useState("");
  const mapRef = useRef(null);

  // Obtén la ubicación inicial y llama a getTheIp al inicio de la aplicación
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLat(latitude);
      setLng(longitude);
      getTheIp();
    });
  }, []);

  // Llama a getTheIp cuando cambia la IP
  useEffect(() => {
    getTheIp();
  }, [ip]);

  const getTheIp = async () => {
    try {
      const result = await getIp(newIp || ip);
      setIp(result.data.query);
      setLat(result.data.lat);
      setLng(result.data.lon);
      setLocation(result.data.city + " " + result.data.region + " " + result.data.zip);
      setTimezone(result.data.timezone);
      setIsp(result.data.isp);
      mapRef.current.setView([result.data.lat, result.data.lon]);

    } catch (error) {
      console.error("Error al obtener datos de IP:", error);
    }
  }

  function searchIp() {
    // Expresión regular para validar una dirección IP en formato IPv4
    const ipRegex = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;

    if (ipRegex.test(newIp)) {
      setIp(newIp);
    } else {
      // Si newIp no es una IP válida, puedes mostrar un mensaje de error o realizar alguna otra acción
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
