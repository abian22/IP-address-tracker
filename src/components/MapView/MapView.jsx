import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Mark from "../Mark/Mark";

function MapView({lat, lng, mapRef}) {


  return (
    <>
      <MapContainer ref={mapRef} center={{ lat: lat, lng: lng }} zoom={13}>
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Mark lat={lat} lng={lng}/>
      </MapContainer>
    </>
  );
}

export default MapView;
