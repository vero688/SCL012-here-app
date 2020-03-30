import React from 'react';
import MapContainer from './MapContainer'


function LeafMap() {
  
  const center = [-33.4569397, -70.6482697];  // {lat, lng}
  const zoom = 16;

  return (
      <div className="container-map">
        <MapContainer 
          center={center}
          zoom={zoom}
        />
      </div>
  );
}

export default LeafMap;    
