import React, { useState } from "react";
import { Button } from "react-bootstrap";
import * as Data from "../data/data.json";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

function Map() {
  const [current, setCurrent] = useState(false);
  const [selecteddata, setSelecteddata] = useState(null);
  const [position, setposition] = useState({
    lat: 31.41173,
    lng: 35.08182,
    zoom: 10,
  });
  var x = document.getElementById("demo");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      setCurrent(true);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(pos) {
    setposition({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude,
      zoom: 18,
    });

    console.log(
      "lat=" + position.lat + " lng=" + position.lng + " zoom=" + position.zoom
    );
  }

  return (
    <GoogleMap
      zoom={position.zoom}
      center={{ lat: position.lat, lng: position.lng }}
      //defaultOptions={{ styles: mapStyles }}
    >
      {current ? <Marker position={position} /> : ""}

      <Button
        size="lg"
        style={{ marginLeft: "50%", marginTop: "10px" }}
        variant="primary"
        onClick={getLocation}
      >
        איפה אני
      </Button>
      {Data.data.map((tad) => (
        <Marker
          key={tad.ID}
          position={{
            lat: tad.lat,
            lng: tad.lng,
          }}
          onClick={() => {
            setSelecteddata(tad);
          }}
        />
      ))}

      {selecteddata && (
        <InfoWindow
          onCloseClick={() => {
            setSelecteddata(null);
          }}
          position={{
            lat: selecteddata.lat,
            lng: selecteddata.lng,
          }}
        >
          <div>
            <h2>{selecteddata.name}</h2>
            <p>{selecteddata.Opening_Hours}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));
export default function MapP() {
  return (
    <div style={{ float: "left", width: "50vw", height: "90vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBWpKFJPb9PgqqPtB3YZScgx0MBaMt-vZ0`}
        loadingElement={<div style={{ height: `100` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
