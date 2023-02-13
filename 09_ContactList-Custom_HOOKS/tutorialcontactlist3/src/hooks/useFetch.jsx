import { useState, useEffect } from "react";

export default function useFetch(url, options) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiCall();
  }, []);

  async function apiCall() {
    const apiResponse = await fetch(url, options);
    try {
      const apiData = await apiResponse.json();
      setData(apiData);
    } catch (error) {
      setError(error);
    }
  }
  return [data, error];
}
