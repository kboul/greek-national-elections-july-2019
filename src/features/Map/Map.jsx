import { useCallback, useState, useEffect, useMemo } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import { useQuery } from '@tanstack/react-query';

import { changeState, types, useAppContext } from '../../context';
import PartyCards from '../PartyCards';
import Tooltip from './Tooltip';
import { useBrowserHeight } from '../../hooks';
import electionsApi from '../../api/electionsApi';
import { getSourceData } from './utils';
import { greekPrefectures } from '../../geoJson';
import {
  dataLayer,
  mapSettings,
  mapStyle,
  initialViewState,
  initialMapHeight,
  initialMapWidth
} from './constants';

const mapboxToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map() {
  const { dispatch } = useAppContext();

  const [viewState, setViewState] = useState(initialViewState);
  const [mapHeight, setMapHeight] = useState(initialMapHeight);

  const { data: geojsonData } = useQuery({
    queryKey: ['geojsonData'],
    queryFn: electionsApi.getPartyPercentages
  });

  const handleViewportChange = newViewport => setViewState(newViewport);

  const handleMouseMove = useCallback(event => {
    const {
      features,
      point: { x, y }
    } = event;

    const hoveredFeature =
      features && features.find(({ layer }) => layer.id === 'data');
    dispatch(changeState(types.hoveredFeatureChanged, { hoveredFeature }));

    if (hoveredFeature) {
      dispatch(
        changeState(types.prefectureIdChanged, {
          prefectureId: hoveredFeature.properties.EP_ID
        })
      );
    }

    dispatch(changeState(types.xChanged, { x }));
    dispatch(changeState(types.yChanged, { y }));
  }, []);

  const browserHeight = useBrowserHeight();
  useEffect(() => {
    const bigBrowserHeight = browserHeight > 970;
    setViewState(prevState => ({
      ...prevState,
      zoom: bigBrowserHeight ? 6 : 5
    }));
    setMapHeight(bigBrowserHeight ? initialMapHeight : '80.6vh');
  }, [browserHeight]);

  const style = useMemo(
    () => ({ width: initialMapWidth, height: mapHeight }),
    [mapHeight]
  );

  const data = getSourceData(greekPrefectures, geojsonData?.data);

  return (
    <>
      <PartyCards />
      <ReactMapGL
        {...viewState}
        {...mapSettings}
        interactiveLayerIds={['data']}
        mapboxAccessToken={mapboxToken}
        mapStyle={mapStyle}
        onMouseMove={handleMouseMove}
        onViewportChange={handleViewportChange}
        style={style}>
        <Source type="geojson" data={data}>
          <Layer {...dataLayer} />
        </Source>
        <Tooltip />
      </ReactMapGL>
    </>
  );
}
