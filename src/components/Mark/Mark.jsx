import React from "react";
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconMark from "../../../images/icon-location.svg"
import { Icon } from "leaflet"

const customIcon = new Icon ({
  iconUrl: iconMark,
  iconSize: [46,56]
})

function Mark() {
  return (
    <>
        <Marker  position={{ lat: '43.7378664', lng: '7.4155527' }} icon={customIcon}/>

    </>
  )
}

export default Mark