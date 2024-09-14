import './polling.css'
import { useState, useEffect } from 'react';
import PollingMap from '../components/pollingMap/PollingMap'; 
import LocationList from '../components/locationList/LocationList'; 
import { PollingLocation } from '../types/pollingLocation'; 
import { fetchPollingLocations } from '../utils/pollingLocationService'; 

const PollingLocations: React.FC = () => {
  const [locations, setLocations] = useState<PollingLocation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<PollingLocation | null>(null);

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await fetchPollingLocations();
        setLocations(data);
      } catch (error) {
        console.error('Error loading locations:', error);
      }
    };

    loadLocations();
  }, []);

  const handleLocationClick = (location: PollingLocation | null) => {
    setSelectedLocation(location);
  };

  return (
    <div>

    <div className="title">Virginia Beach Polling Locations</div>
    <div className="pollingPage">
        
      <div className="mapContainer">
        <PollingMap
          locations={locations}
          selectedLocation={selectedLocation}
          onLocationClick={handleLocationClick}
          />
      </div>
      <div className="listContainerWrapper">
        <LocationList
          locations={locations}
          onLocationClick={handleLocationClick}
          selectedId={selectedLocation ? selectedLocation.properties.OBJECTID : null}
          />
      </div>
    </div>
</div>
  );
};

export default PollingLocations;
