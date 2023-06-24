"use client";
import ReactMapGL, { Source, Layer, Popup } from "react-map-gl";

import { vietnamLevelOne } from "../testData/geoVietnamProvince";
import { geoVietnamDistricts } from "../testData/geoVietnamDistrict";
// import add here
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

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
    // "fill-outline-color": "#ffffbf",
    "fill-color": "#ffffbf",
    "fill-opacity": 0.3,
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
  const [showPopup, setShowPopup] = useState(false);
  const [clickLocation, setClickLocation] = useState(null);
  const [clickedData, setClickedData] = useState(null);

  function handleClick(event) {
    // first check if this is true... meaning the map was clicked, avoid dealing with false click for closing outside
    if (showPopup) return;
    console.log("click event fired", event);
    console.log("showPopup", showPopup);
    console.log("clickLocation", clickLocation);

    const features = event.target.queryRenderedFeatures(event.point);
    setShowPopup(true);
    setClickLocation(event.lngLat);
    setClickedData(features[0]);
    // console.log("features :: ", features);
    // etHoveredFeature(features.length ? features[0] : null);
  }

  return (
    <div className="w-full h-full p-5 relative">
      <ReactMapGL
        // onHover={handleHover}
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
          <Layer {...layerStyle} />
        </Source>
        {showPopup && (
          <Popup
            longitude={clickLocation.lng}
            latitude={clickLocation.lat}
            anchor="bottom"
            onClose={() => {
              setShowPopup(false);
              console.log("this shit was fired!");
            }}
            captureClick={true}
            // closeOnClick={true}
            // closeOnMove={true} ----> this will close popup on movement
          >
            Here
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default DisplayPage;

// event.point gives coordinates of your click event {x,y}
