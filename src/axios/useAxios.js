import { useEffect, useState } from "react";

const useAxios = (configObj) => {
  const { axiosInstance, method, url, requestConfig = {} } = configObj;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        const res = axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          signal: controller.signal,
        });
        setResponse(res);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLading(false);
      }
    };
    fetchData();

    return () => controller.abort;
  }, []);

  return [response, error, loading];
};

export default useAxios;
