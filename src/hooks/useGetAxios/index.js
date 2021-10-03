import { useEffect, useState } from "react";
import axios from "../../config/axios";

const useGetAxios = (uri) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(uri);
        setResponse(response?.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, [uri]);
  return { response, loading, error };
};

export default useGetAxios;
