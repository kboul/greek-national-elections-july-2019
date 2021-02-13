import { useState, useEffect } from 'react';

import { updateGeoJson } from './utils';
import httpService from '../../httpService';
import json from './greece-prefectures.json';

export default function usePrefectureGeoJSON() {
    const [geojson, setGeoJson] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // get the winning party on each prefecture via eps.js
                const { data } = await httpService.get('/current/dyn/v/eps.js');
                updateGeoJson(json, data);
                setGeoJson(json);
            } catch (err) {
                console.log(
                    `There was an error while displaying the GeoJSON ${err.response}`
                );
            }
        };
        fetchData();
    }, [geojson]);

    return geojson;
}
