import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { geoVietnamDistricts } from "../testData/geoVietnamDistrict";
import { v4 as uuidv4 } from "uuid";
import "leaflet/dist/leaflet.css";

// let hashkey = uuidv4();
const defaultPosition = [106, 15];
const style = (feature) => {
  return {
    // need add a color matching function and pass in the score of the feature E8E8E8
    fillColor: "#DFDFDF",
    weight: 1,
    opacity: 1,
    color: "#666",
    dashArray: "3",
    fillOpacity: 0.7,
  };
};

export default function Map() {
  return (
    <MapContainer
      center={defaultPosition}
      zoom={3}
      scrollWheelZoom={true}
      className="w-full h-full"
      // ref={nodeRef}
      // key={hashKey}
    >
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // url={mapBoxUrl.MAPBOX_URL}
        url="https://api.mapbox.com/styles/v1/robjj/clce68ufg003614nvvjlep2ke/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoicm9iamoiLCJhIjoiY2xjZTVva3NhMGQydzN3bGx5cnEwd2I1eSJ9.X-ErXEB4RZMQmGZvsaMGNA"
        // url={"https://tile.openstreetmap.org/{z}/{x}/{y}.png"}
      />
    </MapContainer>
  );
}
