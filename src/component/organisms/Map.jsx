import React, { useEffect } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useDispatch } from 'react-redux';
import { onAddData } from '@/reducer/weather/weather';
import fetchWeatherData from '@/app/api/weatherApi';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.API_KEY
  });
  
  let dispatch= useDispatch();
  const [map, setMap] = React.useState(null);
  const [markerPosition, setMarkerPosition] = React.useState(null); // Agregar estado para la ubicación del marcador

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
   
    setMarkerPosition({ lat, lng }); // Actualizar la ubicación del marcador
    
    fetchWeatherData(lat,lng).then( data =>{
        dispatch(onAddData(data))
    })
};



  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={handleClick}
    >
      {markerPosition && ( // Renderizar el marcador si hay una ubicación seleccionada
        <Marker position={markerPosition} />
      )}
    </GoogleMap>
  ) : <></>;
}

export default Map;