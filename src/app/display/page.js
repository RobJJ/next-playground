"use client";
import ReactMapGL, { Source, Layer, Popup } from "react-map-gl";

import { vietnamLevelOne } from "../testData/geoVietnamProvince";
import { geoVietnamDistricts } from "../testData/geoVietnamDistrict";
import { dataVietnam } from "../testData/dataVietnam";
// import add here
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

function getColor(score) {
  //ECON_SCORE
}

const layerStyle = {
  id: "data",
  type: "fill",
  paint: {
    "fill-outline-color": "#000",
    "fill-color": "#ffffbf",
    "fill-opacity": 0.4,
  },
};

// const lineStyle = {
//   id: "districts",
//   source: "test-districts",
//   type: "line",
//   paint: {
//     "line-width": 1,
//     "line-color": "#0080ef",
//   },
// };
// potentially get info sent down to this component from a parent, giving info on things taken from server component - eg, mapbox token, long and lat cord, mapStyle key from your custom profile etc
const DisplayPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [clickLocation, setClickLocation] = useState(null);
  const [clickedData, setClickedData] = useState(null);

  function handleClick(event) {
    // first check if this is true... this will only be true if popup just closed because you clicked on map
    if (showPopup) return;
    console.log("click event fired", event);
    console.log("showPopup", showPopup);
    console.log("clickLocation", clickLocation);
    console.log("data::", clickedData);

    const features = event.target.queryRenderedFeatures(event.point);
    setShowPopup(true);
    setClickLocation(event.lngLat);
    setClickedData(features[0]);
    console.log("features :: ", features);
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
          {/*<Layer {...lineStyle} />*/}
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
            // captureClick={true}
            // closeOnClick={true}
            // closeOnMove={true} ----> this will close popup on movement
          >
            <div>
              {!clickedData || clickedData.layer.id === "water"
                ? "No data available"
                : clickedData.properties.shapeName}
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default DisplayPage;

// event.point gives coordinates of your click event {x,y}
// clickedData.layer.id === "water" .... "No data available"
// clickedData.layer.id === "data" ... {clickedData.properties.shapeName}
