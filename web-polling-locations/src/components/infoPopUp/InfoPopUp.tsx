import { InfoWindowF } from '@react-google-maps/api';
import { PollingLocation } from '../../types/pollingLocation'; // Import the updated interface

interface InfoWindowComponentProps {
  location: PollingLocation;
  onClose: () => void;
}

const InfoPopUp: React.FC<InfoWindowComponentProps> = ({ location, onClose }) => {
  return (
    <InfoWindowF
      position={{
        lat: location.geometry.coordinates[1],
        lng: location.geometry.coordinates[0],
      }}
      onCloseClick={onClose}
      options={{
        pixelOffset: new google.maps.Size(0, -30)
      }}
    >
      <div>
        <h3>{location.properties.PRECINCT_L}</h3>
        <p>{location.properties.PRECINCT_A}</p>
        <p>Telephone: {location.properties.TELEPHONE}</p>
        <p>Senate District: {location.properties.SENATE_DIST}</p>
        <p>House District: {location.properties.HOUSE_DIST}</p>
      </div>
    </InfoWindowF>
  );
};

export default InfoPopUp;