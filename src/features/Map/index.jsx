import React, { useState, useContext } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

import PartyCards from './PartyCards';
import Tooltip from './Tooltip';
import { Context } from '../../context';
import usePrefectureGeoJSON from './hooks';

import { dataLayer, mapSettings, mapViewport } from './constants';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

export default function Map() {
    const { setHoveredFeature, setX, setY, setPrefectureId } = useContext(
        Context
    );

    const [viewport, setViewport] = useState(mapViewport);
    const [settings] = useState(mapSettings);

    const geojsonData = usePrefectureGeoJSON();

    const handleViewportChange = newViewport => setViewport(newViewport);

    const handleHover = event => {
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
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onHover={handleHover}
            onViewportChange={handleViewportChange}>
            <Source type="geojson" data={geojsonData}>
                <Layer {...dataLayer} />
            </Source>
            <Tooltip />
            <PartyCards />
        </ReactMapGL>
    );
}
