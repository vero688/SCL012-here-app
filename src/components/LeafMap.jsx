import React, { Fragment, useState, useEffect } from 'react';
import MapContainer from './MapContainer'

function LeafMap() {

  const [locals, setLocals] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/SCL012-here-app/developer/src/json/places.json')
    const infoPetPlaces = await data.json()
    setLocals(infoPetPlaces)
  }

  const center = [-33.4569397, -70.6482697];  // {lat, lng}
  const zoom = 16;

  return (
    <Fragment>
      <div className="container-map">
        <MapContainer
          center={center}
          zoom={zoom}
          locals={locals}
        />
      </div>
    </Fragment>
  );
}

export default LeafMap;    
