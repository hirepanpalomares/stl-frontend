import React, { useState, useEffect, useRef } from "react";

const Map = () => {

  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  useEffect(() => {
    // console.log(window.L.map("map"));
    // Set up the OSM layer
    var map = window.L.map('map').setView([45, 10], 4);
    window.L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    ).addTo(map);
    console.log(map);
    
    }, []);

  return (
    <div tabIndex="650" id="map"></div>
    
  )
}

export default Map