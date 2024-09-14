import './locationsList.css';
import { PollingLocation } from '../../types/pollingLocation'; 
import { useRef, useEffect } from 'react';


interface LocationListProps {
  locations: PollingLocation[];
  onLocationClick: (location: PollingLocation) => void;
  selectedId: number | null;
}

const LocationList: React.FC<LocationListProps> = ({ locations, onLocationClick, selectedId  }) => {
    const listRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        if (listRef.current && selectedId !== null) {
          const selectedItem = listRef.current.querySelector(`div[data-id='${selectedId}']`) as HTMLDivElement | null;
          if (selectedItem) {
            selectedItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
    }, [selectedId]);
 return (
   <div className="listContainer" ref={listRef} >
     {locations.map((location) => (
       <div
         key={location.properties.OBJECTID}
         data-id={location.properties.OBJECTID}
         onClick={() => onLocationClick(location)}
         className={selectedId === location.properties.OBJECTID ? 'selected listItem' : 'listItem'}
       >
         <strong>{location.properties.PRECINCT_L}</strong><br />
         {location.properties.PRECINCT_A}
       </div>
     ))}
   </div>
  );
};

export default LocationList;