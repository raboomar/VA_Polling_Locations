import './polling.css'
import { useState, useEffect } from 'react';
import PollingMap from '../components/pollingMap/PollingMap'; 
import LocationList from '../components/locationList/LocationList'; 
import { PollingLocation } from '../types/pollingLocation'; 
import { fetchPollingLocations } from '../utils/pollingLocationService'; 
import Loader from '../components/loader/Loader';

const PollingLocations: React.FC = () => {
  const [locations, setLocations] = useState<PollingLocation[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<PollingLocation | null>(null);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await fetchPollingLocations();
        setLocations(data);
      } catch (error) {
        console.error('Error loading locations:', error);
      }finally{
        setLoading(false)
      }
    };

    loadLocations();
  }, []);

  const handleLocationClick = (location: PollingLocation | null) => {
    setSelectedLocation(location);
  };
  if (loading) return <Loader />;
  return (
    <div>

    <div className="title"> <h2>
    Virginia Beach Polling Locations
      </h2></div>
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
