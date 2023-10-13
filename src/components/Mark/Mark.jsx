import React from "react";
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import iconMark from "../../../images/icon-location.svg"
import { Icon } from "leaflet"

const customIcon = new Icon ({
  iconUrl: iconMark,
  iconSize: [46,56]
})

function Mark({lat, lng}) {
  return (
    <>
        <Marker  position={{ lat: lat, lng: lng}} icon={customIcon}/>

    </>
  )
}

export default Mark