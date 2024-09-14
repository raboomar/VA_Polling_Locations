interface Geometry {
    type: "Point";
    coordinates: [number, number]; 
  }
  

  interface Properties {
    OBJECTID: number;
    PCTNO: number;
    PCTNAME: string;
    SENATE_DIST: string;
    HOUSE_DIST: string;
    PRECINCT_L: string;
    PRECINCT_A: string;
    TELEPHONE: string;
    PCT_ID: string;
  }

  export interface PollingLocation {
    type: "Feature";
    properties: Properties;
    geometry: Geometry;
  }