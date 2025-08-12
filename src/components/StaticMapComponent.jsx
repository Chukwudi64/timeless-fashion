import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const StaticMapComponent = () => {
  return (
    <MapContainer center={[9.0915, 7.4535]} zoom={13} style={{ height: '600px' }} className='rounded rounded-2xl'>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[9.0915, 7.4535]}>
        <Popup>Maitama, Abuja</Popup>
      </Marker>
    </MapContainer>
  );
}
export default StaticMapComponent;
