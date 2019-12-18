import React, { useState, useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import json from './greeceprefectures.json';
import { dataLayer } from './constants';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = () => {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 39.0742073,
        longitude: 21.8243122,
        zoom: 6
    });

    const [data, setData] = useState(null);
    useEffect(() => setData(json), []);

    const onViewportChange = newViewport => setViewport(newViewport);

    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onViewportChange={onViewportChange}>
            <Source type="geojson" data={data}>
                <Layer {...dataLayer} />
            </Source>
        </ReactMapGL>
    );
};

export default Map;
