import { useState, useEffect } from 'react';

import { updateGeoJson } from './utils';
import electionsApi from '../../api/electionsApi';
import json from './greece-prefectures.json';

export default function usePrefectureGeoJSON() {
    const [geojson, setGeoJson] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // get the winning party on each prefecture via eps.js
                const { data } = await electionsApi.getPartyPercentages();
                updateGeoJson(json, data);
                setGeoJson(json);
            } catch (err) {
                console.log(
                    `There was an error while displaying the GeoJSON ${err.response}`
                );
            }
        };
        fetchData();
    }, []);

    return geojson;
}
