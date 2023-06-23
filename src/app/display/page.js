"use client";
import Map, { Source, Layer } from "react-map-gl";

import { vietnamLevelOne } from "../testData/geoVietnamProvince";
import { geoVietnamDistricts } from "../testData/geoVietnamDistrict";

const layerStyle = {
  id: "data",
  type: "fill",
  // paint: {
  //   "fill-color": {
  //     property: "percentile",
  //     stops: [
  //       [0, "#3288bd"],
  //       [1, "#66c2a5"],
  //       [2, "#abdda4"],
  //       [3, "#e6f598"],
  //       [4, "#ffffbf"],
  //       [5, "#fee08b"],
  //       [6, "#fdae61"],
  //       [7, "#f46d43"],
  //       [8, "#d53e4f"],
  //     ],
  //   },
  //   "fill-opacity": 0.8,
  // },
  paint: {
    "fill-outline-color": "#0040c8",
    "fill-color": "#fff",
    "fill-opacity": 0,
  },
};

const lineStyle = {
  id: "districts",
  source: "test-districts",
  type: "line",
  paint: {
    "line-width": 1,
    "line-color": "#0080ef",
  },
};
// potentially get info sent down to this component from a parent, giving info on things taken from server component - eg, mapbox token, long and lat cord, mapStyle key from your custom profile etc
const DisplayPage = () => {
  function handleClick(event) {
    console.log("event??", event);
  }
  // onMouseMove={onHover}
  return (
    <div className="w-full h-full p-5">
      <Map
        onClick={handleClick}
        mapboxAccessToken={
          "pk.eyJ1Ijoicm9iamoiLCJhIjoiY2xjZTVva3NhMGQydzN3bGx5cnEwd2I1eSJ9.X-ErXEB4RZMQmGZvsaMGNA"
        }
        mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: 106,
          latitude: 15,
          zoom: 4.2,
        }}
        attributionControl={false}
        // style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/robjj/clce68ufg003614nvvjlep2ke"
      >
        <Source type="geojson" data={geoVietnamDistricts}>
          <Layer {...lineStyle} />
        </Source>
      </Map>
    </div>
  );
};

export default DisplayPage;
