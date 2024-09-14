import './locationsList.css';
import { PollingLocation } from '../../types/pollingLocation'; 


interface LocationListProps {
  locations: PollingLocation[];
  onLocationClick: (location: PollingLocation) => void;
}

const LocationList: React.FC<LocationListProps> = ({ locations, onLocationClick }) => {

 return (
   <div className="listContainer">
     {locations.map((location) => (
       <div
         key={location.properties.OBJECTID}
         className="listItem"
         onClick={() => onLocationClick(location)}
       >
         <strong>{location.properties.PRECINCT_L}</strong><br />
         {location.properties.PRECINCT_A}
       </div>
     ))}
   </div>
  );
};

export default LocationList;