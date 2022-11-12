import { useState, useEffect } from 'react';

import electionsApi from '../../api/electionsApi';

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
        const { data } = await electionsApi.getResultsPerParty(partyId);
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
