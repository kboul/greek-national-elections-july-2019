import { useState, useEffect } from 'react';
import httpService from '../../httpService';

/**
 * election results per prefecture
 * @param {string} id
 * @returns {Array}
 */

const useEpsFetcher = prefectureId => {
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        const fetchData = async () => {
            if (!prefectureId || prefectureId === -1) return;

            try {
                const response = await httpService.get(
                    `/current/dyn/v/ep_${prefectureId}.js`
                );
                setResults(response);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [prefectureId]);

    return [results, loading, error];
};

export default useEpsFetcher;
