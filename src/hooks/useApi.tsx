import { useEffect, useState } from "react";

const useApi = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        //console.log(json);
        setData(json);
      })
      .catch((e) => {
        setError(e);
        //console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, data, error };
};
export default useApi;
