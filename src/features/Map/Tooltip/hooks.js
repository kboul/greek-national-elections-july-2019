import { useState, useEffect } from 'react';

import electionsApi from '../../../api/electionsApi';

/**
 * election results per prefecture
 * @param {string} prefectureId
 * @returns {Array}
 */

export default function useEpsFetcher(prefectureId) {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const fetchData = async () => {
      if (!prefectureId || prefectureId === -1) return;

      try {
        const response = await electionsApi.getTooltipResults(prefectureId);
        setResults(response);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [prefectureId]);

  return [results, loading, error];
}
