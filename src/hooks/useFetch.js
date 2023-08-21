import { useState, useEffect } from "react";
import handleApiCall from "./handleApiCall";

const useFetch = ({ apiCall, dontCall }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (apiCall && !dontCall) {
      const fetchData = async () => {
        setLoading(true);
        setError(null);

        handleApiCall(
          apiCall,
          (response) => {
            setData(response);
            setLoading(false);
          },
          (error) => {
            setError(error);
            setLoading(false);
          }
        );
      };

      fetchData();
    } else {
      return () => {};
    }
  }, [apiCall, dontCall]);

  return { data, loading, error };
};

export default useFetch;
