import React, { useState, useEffect } from 'react';
import '../styles/New.css'
import { Button } from '@material-ui/core'

import MapContainer from './MapContainer'
import IconBreadcrumbs from './breadCrumbs'
import useGeolocation from 'react-hook-geolocation'


function LeafMap() {

  const geolocation = useGeolocation()

  const [locals, setLocals] = useState([]);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await fetch('https://raw.githubusercontent.com/tamaramunoz/SCL012-here-app/developer/src/json/places.json')
    const infoPetPlaces = await data.json()
    setLocals(infoPetPlaces)
  }

  const latlng = { lat: geolocation.latitude, lng: geolocation.longitude, }
  const center = latlng;  // {lat, lng}
  const zoom = 16;

  return (
    <>

      <div className="container-map">
        <MapContainer
          center={center}
          zoom={zoom}
          locals={locals}
        />

        <div className="container-medio">
          <h2>¿A dónde vamos?</h2>
        </div>

        <div className="container-options">
          <IconBreadcrumbs />
        </div>
        <div className='container-medio'>
          <Button color='inherit' variant='contained'>Buscar lugares cercanos</Button>
        </div>

      </div>


    </>

  );
}

export default LeafMap;    
