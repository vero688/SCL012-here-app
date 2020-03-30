import React, { useState, Fragment } from 'react';
import MapContainer from './MapContainer'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


function LeafMap() {

  const [locals, setLocals] = useState([]);


  const center = [-33.4569397, -70.6482697];  // {lat, lng}
  const zoom = 16;

  return (
    <Fragment>
      <div className="container-map">
        <MapContainer
          center={center}
          zoom={zoom}
        />

        { locals.map(item => {
          return (
            <Marker position={item.position}>
              <Popup>{item.content}</Popup>
            </Marker>
          )
        })
        }
      </div>
    </Fragment>
  );
}

export default LeafMap;    
