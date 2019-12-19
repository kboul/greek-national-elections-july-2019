import { useState, useEffect } from 'react';
import json from './greece-prefectures.json';

const usePrefectureGeoJson = () => {
    const [data, setData] = useState(null);
    useEffect(() => setData(json), []);

    return data;
};

export default usePrefectureGeoJson;
