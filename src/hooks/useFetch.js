import { useState, useEffect, useCallback } from "react";

/**
 * Today's Version: useFetch.js
 * Optimized for React 19 with AbortController for Race Condition protection.
 */
const useFetch = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (signal) => {
      try {
        setLoading(true);
        setError(null);
        // Pass the signal to the fetch function if it supports it
        const result = await fetchFunction(signal);

        // Only set data if the request wasn't cancelled
        if (!signal?.aborted) {
          setData(result);
        }
      } catch (err) {
        if (err.name === "AbortError") return; // Ignore cancellation errors
        setError(err.message || "An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    },
    [fetchFunction]
  );

  useEffect(() => {
    const controller = new AbortController();

    fetchData(controller.signal);

    // Cleanup function: This cancels the fetch if the component unmounts
    // or if dependencies change before the fetch is done.
    return () => controller.abort();
  }, [...dependencies, fetchData]);

  const refetch = () => {
    const controller = new AbortController();
    fetchData(controller.signal);
  };

  return { data, loading, error, refetch };
};

export default useFetch;
