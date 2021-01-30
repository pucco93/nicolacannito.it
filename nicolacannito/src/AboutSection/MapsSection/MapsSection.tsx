import React, { useState, useEffect } from 'react';
import useStyles from './MapsSection.styles';
import * as models from '../../models/index';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export interface IMapsSectionProps {
    theme: models.Theme;
}

const MapsSection = (props: IMapsSectionProps) => {
    let {
      mapContainer,
      map
    } = useStyles(props);

    const position = {lat: 41.12604, lng: 16.86947};

    return ( 
      <div id="mapid" className={mapContainer} >
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={map} >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
};

export default MapsSection;