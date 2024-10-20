import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const defaultCenter = {
    lat: 21.027763,
    lng: 105.834160,
};

const Map = ({ coords }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAknXT2EkFRw5zM1jAu3Ksu2VuRkgxR7So', 
    });

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading Maps...</div>;

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={coords.lat && coords.lng ? coords : defaultCenter}
        >
            {coords.lat && coords.lng && <Marker position={coords} />}
        </GoogleMap>
    );
};

export default Map;
