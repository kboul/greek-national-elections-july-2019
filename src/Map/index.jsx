import React, { useState, useContext } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import { dataLayer } from './constants';
import Tooltip from './Tooltip';
import usePrefectureGeoJson from './usePrefectureGeoJson';
import { Context } from '../context';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = () => {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 39.0742073,
        longitude: 21.8243122,
        zoom: 6
    });
    const geojsonData = usePrefectureGeoJson();
    const { setHoveredFeature, setX, setY, setPrefectureId } = useContext(
        Context
    );

    const onViewportChange = newViewport => setViewport(newViewport);

    const onHover = event => {
        const {
            features,
            srcEvent: { offsetX, offsetY }
        } = event;
        const hoverFeature =
            features && features.find(f => f.layer.id === 'data');

        setHoveredFeature(hoverFeature);
        if (hoverFeature) setPrefectureId(hoverFeature.properties.EP_ID);

        setX(offsetX);
        setY(offsetY);
    };

    return (
        <ReactMapGL
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onViewportChange={onViewportChange}
            onHover={onHover}>
            <Source type="geojson" data={geojsonData}>
                <Layer {...dataLayer} />
            </Source>
            <Tooltip />
        </ReactMapGL>
    );
};

export default Map;
