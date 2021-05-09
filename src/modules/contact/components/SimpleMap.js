import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import marker from "../../common/images/LeadingEdgeMapMarker.png";

const newicon = new L.icon({
  iconUrl: marker,
  iconSize: [25, 35],
  iconAnchor: [13, 13],
});

const SimpleMap = () => {
  return (
    <MapContainer
      center={[40.165801202810776, -75.06408060000001]}
      zoom={15}
      scrollWheelZoom={false}
      className="z-40 w-full rounded shadow-sm"
      style={{ paddingTop: "80%" }}
      dragging={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
      />
      <Marker
        position={[40.165801202810776, -75.06408060000001]}
        icon={newicon}
      >
        <Popup>Leading Edge Tooling</Popup>
      </Marker>
    </MapContainer>
  );
};

export default SimpleMap;
