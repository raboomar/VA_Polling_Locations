import './infoPopUp.css'
import { InfoWindowF } from '@react-google-maps/api';
import { PollingLocation } from '../../types/pollingLocation'; // Import the updated interface

interface InfoWindowComponentProps {
  location: PollingLocation;

}

const InfoPopUp: React.FC<InfoWindowComponentProps> = ({ location, }) => {
  return (
    <InfoWindowF
      position={{
        lat: location.geometry.coordinates[1],
        lng: location.geometry.coordinates[0],
      }}
 
      options={{
        pixelOffset: new google.maps.Size(0, -30)
      }}
    >
      <div className='infoWindow'>
        <h3 className='title'>{location.properties.PRECINCT_L}</h3>
        <p className='address'>{location.properties.PRECINCT_A}</p>
        <p className='details'>Telephone: {location.properties.TELEPHONE}</p>
        <p className='details'>Senate District: {location.properties.SENATE_DIST}</p>
        <p className='details'> House District: {location.properties.HOUSE_DIST}</p>
      </div>
    </InfoWindowF>
  );
};

export default InfoPopUp;