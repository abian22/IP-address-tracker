import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import getIp from "../../Services/ip";
import Mark from "../Mark/Mark";




function MapView() {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [ip, setIp] = useState("");
  const mapRef = useRef(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLat(latitude);
      setLng(longitude);
    });
    // Obtener la ubicación por IP y actualizar lat, lng e ip
    getTheIp();
  }, []);

  useEffect(() => {
    // Mover el mapa a la nueva posición una vez que lat y lng se hayan actualizado
    if (mapRef.current) {
      mapRef.current.setView([lat, lng]);
    }
  }, [lat, lng]); // La función se ejecutará cuando lat o lng cambien

  const getTheIp = async () => {
    const result = await getIp(ip);
    setIp(result.data.query);
    setLat(result.data.lat);
    setLng(result.data.lon);
  }

    console.log("esta es otra lat" + lat)
  
  
  return (
    <>
      <MapContainer ref={mapRef} center={{ lat: lat, lng: lng }} zoom={13}>
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Mark/>
      </MapContainer>
    </>
  );
}

export default MapView;
