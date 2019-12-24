import React, { useState, useContext } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import { dataLayer } from './constants';
import { Context } from '../context';
import Tooltip from './Tooltip';
import usePrefectureGeoJSON from './hooks';
import PartyCards from './PartyCards';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

const Map = () => {
    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 39.0742073,
        longitude: 23.727539,
        zoom: 6
    });
    const [settings] = useState({
        dragPan: false,
        scrollZoom: false,
        doubleClickZoom: false
    });
    const geojsonData = usePrefectureGeoJSON();
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
            {...settings}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onViewportChange={onViewportChange}
            onHover={onHover}>
            <Source type="geojson" data={geojsonData}>
                <Layer {...dataLayer} />
            </Source>
            <Tooltip />
            <PartyCards />
        </ReactMapGL>
    );
};

export default Map;
