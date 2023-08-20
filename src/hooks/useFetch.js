import { useState, useEffect } from "react";
import  handleApiCall from "./handleApiCall";

const useFetch = ({ apiCall, dontCall }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(dontCall, 'dont')
    if(apiCall && !dontCall) {
        console.log('in')
      const fetchData = async () => {
        setLoading(true);
        setError(null);
  
        handleApiCall(apiCall, (response) => {
            console.log(response, 'res ')
          setData(response);
          setLoading(false);
        }, (error) => {
          setError(error);
          setLoading(false);
        });
      };
  
      fetchData();
    } else {
        return () => {};
    }
  }, [apiCall, dontCall]);

  return { data, loading, error };
};

export default useFetch;
