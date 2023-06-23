"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { geoVietnamDistricts } from "../testData/geoVietnamDistrict";
import { v4 as uuidv4 } from "uuid";
import Map from "../components/Map";

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

export default function LeafletMap() {
  //   let hashkey = uuidv4();
  return (
    <div className="w-full h-full bg-pink-200 p-2">
      <Map></Map>
    </div>
  );
}

// <GeoJSON
//   // onEachFeature={onEachFeature}
//   // this key is important to tell the map that the data has rendered!
//   key={hashkey}
//   style={style}
//   // style={() => style()}
//   // data={countryGeoJsonData}
//   data={geoVietnamDistricts}
//   // data={expData}
//   // ref={mapRef}
// ></GeoJSON>;
