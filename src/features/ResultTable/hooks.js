import { useState, useEffect } from 'react';
import httpService from '../../httpService';

export default function usePartyResultFetcher(partyId) {
    const [partyResults, setPartyResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);

        const fetchData = async () => {
            if (!partyId) return;

            try {
                const { data } = await httpService.get(
                    `/current/dyn/v/party_${partyId}.js`
                );
                setPartyResults(data);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [partyId]);

    return [partyResults, loading, error];
}
