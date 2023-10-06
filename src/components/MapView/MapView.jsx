import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Mark from "../Mark/Mark";




function MapView() {
  return (
    <>
      <MapContainer center={{ lat: '43.7378664', lng: '7.4155527' }} zoom={13}>
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
