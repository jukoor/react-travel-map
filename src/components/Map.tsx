import { Layer, Marker, Source } from "react-map-gl/maplibre";
import { Map as MapLibre } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

import { visitedCountriesData } from "../../assets/germany";
import { useState } from "react";
// import maplibregl, { FullscreenControl, GeolocateControl, ScaleControl } from "maplibre-gl";
import Button from "@mui/material/Button";
import "../styles/Map.scss";
// import Map, { NavigationControl } from "react-map-gl/maplibre";

import Map, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import maplibregl from "maplibre-gl";

const MapComponent = () => {
  const [map, setMap] = useState<maplibregl.Map>();
  const handleLoad = (event: any) => {
    const map = event.target;
    setMap(map);
  };

  const handleClick = () => {
    if (map) {
      map.flyTo({
        center: [
          -74.5 + (Math.random() - 0.5) * 10,
          40 + (Math.random() - 0.5) * 10,
        ],
        essential: true, // this animation is considered essential with respect to prefers-reduced-motion
      });
    }
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={handleClick}>
        Outlined
      </Button> */}
      <MapLibre
        mapLib={maplibregl}
        dragPan={true}
        scrollZoom={true}
        doubleClickZoom={true}
        touchZoomRotate={true}
        keyboard={true}
        onLoad={handleLoad}
        initialViewState={{
          latitude: 52.5057713,
          longitude: 13.4457403,
          zoom: 1,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        <Marker longitude={-122.4} latitude={37.8} color="red" />
        <Source
          id="visitedCountries"
          type="geojson"
          data={visitedCountriesData}
        >
          <Layer
            id="visitedCountriesFill"
            type="fill"
            paint={{ "fill-color": "lightblue", "fill-opacity": 0.8 }}
            beforeId="landcover"
          />
        </Source>
        <GeolocateControl position="bottom-right" />
        <FullscreenControl position="bottom-right" />
        <NavigationControl position="bottom-right" />
        <ScaleControl />
      </MapLibre>
    </>
  );
};

export default MapComponent;
