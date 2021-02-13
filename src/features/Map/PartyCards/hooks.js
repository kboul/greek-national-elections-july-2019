import { useState, useEffect } from 'react';
import httpService from '../../../httpService';

/**
 * fetches total party results
 */

const useEpik1Fetcher = () => {
    const [epik1Data, setEpik1Data] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        const fetchData = async () => {
            try {
                const { data } = await httpService.get(
                    '/current/dyn1/v/epik_1.js'
                );
                setEpik1Data(data);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return [epik1Data, loading, error];
};

export default useEpik1Fetcher;
