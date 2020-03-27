import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const YOUR_API_KEY = {
    key: 'kSUp4BM5FUYJrZLmTzjxf1bj-2Rmt_SJWHr6xIaxCig'
}

function LeafMap() {

const hereTileUrl = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;
const center = [-33.4569397,  -70.6482697];  // {lat, lng}
const zoom = 16;

  return (
    <Map 

      center={center} 
      zoom={zoom}>

        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={hereTileUrl}
        />

      </Map>

  );
}

export default LeafMap;    
