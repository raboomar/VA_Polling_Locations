import './pollingmap.css';
import React, { useEffect, useState } from 'react';
import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import Loader from '../loader/Loader';
import { PollingLocation } from '../../types/pollingLocation';
import InfoPopUp from '../infoPopUp/InfoPopUp';

interface PollingMapProps {
  locations: PollingLocation[];
  selectedLocation: PollingLocation | null;
  onLocationClick: (location: PollingLocation) => void;
}

const INITIAL_CENTER = { lat: 36.85, lng: -76.2 };
const INITIAL_ZOOM = 12;

const PollingMap: React.FC<PollingMapProps> = ({ locations, selectedLocation, onLocationClick }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  });

  useEffect(() => {
    if (map && selectedLocation) {
      map.panTo({
        lat: selectedLocation.geometry.coordinates[1],
        lng: selectedLocation.geometry.coordinates[0]
      });
      map.setZoom(16);
    }
  }, [map, selectedLocation]);

  if (!isLoaded) return <Loader />;

  return (
    <div className="mapContainer">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={INITIAL_CENTER}
        zoom={INITIAL_ZOOM}
        onLoad={(map) => setMap(map)}
      >
        {locations.map((location) => (
          <MarkerF
            key={location.properties.OBJECTID}
            position={{ lat: location.geometry.coordinates[1], lng: location.geometry.coordinates[0] }}
            onClick={() => onLocationClick(location)}
          >
            {selectedLocation?.properties.OBJECTID === location.properties.OBJECTID && (
              <InfoPopUp location={location}  />
            )}
          </MarkerF>
        ))}
      </GoogleMap>
    </div>
  );
};

export default PollingMap;