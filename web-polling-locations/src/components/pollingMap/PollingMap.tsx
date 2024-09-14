import './pollingmap.css'
import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, MarkerF, useLoadScript } from '@react-google-maps/api';
import Loader from '../loader/Loader'; 
import { PollingLocation } from '../../types/pollingLocation';
import { fetchPollingLocations } from '../../utils/pollingLocationService'; 
import LocationList from '../locationList/LocationList';
import InfoPopUp from '../infoPopUp/InfoPopUp';

const INITIAL_CENTER = { lat: 36.85, lng: -76.2 };
const INITIAL_ZOOM = 12;

const PollingMap: React.FC = () => {
  const [locations, setLocations] = useState<PollingLocation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<PollingLocation| null>(null);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!, 
  });
  const [infoWindowShown, setInfoWindowShown] = useState(false);
  useEffect(() => {

    const loadLocations = async () => {
      try {
        const data = await fetchPollingLocations();
        setLocations(data);
        if (map && data.length > 0) {
   
          map.panTo({
            lat: data[0].geometry.coordinates[1],
            lng: data[0].geometry.coordinates[0]
          });
          map.setZoom(16); 
        }
      } catch (error) {
        console.error('Error loading locations:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLocations();
  }, [map]);

  const handleLocationClick = (location: PollingLocation) => {
    if (map) {
      map.panTo({
        lat: location.geometry.coordinates[1],
        lng: location.geometry.coordinates[0]
      });
      map.setZoom(16);
    }
    setSelectedLocation(location);
    
    setInfoWindowShown(true)
  };
  const handleCloseInfoWindow = () => {
    setSelectedLocation(null);
  };
  if (!isLoaded || loading) return <Loader />; 

  return (
    <div>
      <h1>Polling Locations</h1>
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
      onClick={() => handleLocationClick(location)}
    >
      {selectedLocation?.properties.OBJECTID === location.properties.OBJECTID && (
     <InfoPopUp location={location} onClose={handleCloseInfoWindow} />
      )}
    </MarkerF>
  ))}
        </GoogleMap>
      </div>
      <LocationList locations={locations} onLocationClick={handleLocationClick} selectedId={selectedLocation?.properties.OBJECTID ?? null} />
    </div>
  );
};

export default PollingMap;