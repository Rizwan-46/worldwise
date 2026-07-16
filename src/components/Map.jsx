import React, { use, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useGeoLocation } from "../hooks/useGeolocation";
import Styles from "./Map.module.css";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import Button from "./Button";

export default function Map() {
  const [searchParam] = useSearchParams();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([31, 74]);

  const {
    isLoading: isloadingPosition,
    position: geoLocationPosition,

    getLocation,
  } = useGeoLocation();

  useEffect(() => {
    const lat = searchParam.get("lat");
    const lng = searchParam.get("lng");

    if (lat && lng) {
      setMapPosition([Number(lat), Number(lng)]);
    }
  }, [searchParam]);
  useEffect(
    function () {
      if (geoLocationPosition) {
        setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
      }
    },
    [geoLocationPosition]
  );

  return (
    <div className={Styles.mapContainer}>
      <Button type="position" onClick={getLocation}>
        {isloadingPosition ? "Loading..." : "Use Your Position"}
      </Button>
      <MapContainer
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={true}
        className={Styles.map}
      >
        <ChangeMapView position={mapPosition} />
        <DetectClick />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {cities.map((city, i) => (
          <Marker position={[city.position.lat, city.position.lng]} key={i + 1}>
            <Popup>
              {city.cityName}
              <hr />
              <b>{city.country}</b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

function ChangeMapView({ position }) {
  const map = useMap();

  useEffect(() => {
    map.setView(position);
  }, [position, map]);

  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      console.log(e);
      navigate(`/app/form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}
