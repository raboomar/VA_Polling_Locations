export const fetchPollingLocations: any = async () => {
    try {
      const response = await fetch('/data/Polling_Locations.geojson');
      const data = await response.json();

      if (data && data.features) {
        return data.features
      } else {
        console.error('Unexpected data format', data);
      }
    } catch (error) {
      console.error('Error fetching GeoJSON file:', error);
    }
  };