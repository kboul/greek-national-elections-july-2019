import { useState, useEffect } from 'react';

import electionsApi from '../../../api/electionsApi';

/**
 * fetches total party results
 */

export default function useResultsPerPerfecture() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        const fetchData = async () => {
            try {
                const response = await electionsApi.getResultsPerPerfecture();
                setData(response.data);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return [data, loading, error];
}
