import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import getIp from "../../Services/ip";
import Mark from "../Mark/Mark";




function MapView() {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [id, setId] = useState("8.8.8.8")
  const mapRef = useRef(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLat(latitude);
      setLng(longitude);

      // Mover el mapa a la nueva posición
      if (mapRef.current) {
        mapRef.current.setView([latitude, longitude])
      }
    });
    getTheIp()
  }, []);

  const getTheIp = async () => {
      const result = await getIp(id);
      setId(result)
  }
  console.log("esta es la id:" + id)
  
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
