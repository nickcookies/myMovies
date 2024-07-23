import { useEffect, useState } from "react";
import api from "../api/api"; // Ensure this is the correct path
import { AxiosError, AxiosRequestConfig } from "axios";

interface TypeOfParams {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export function useApi<T>(
  url: string,
  params?: TypeOfParams,

  headers?: AxiosRequestConfig["headers"],
  enabler: boolean = true
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);
  const [data, setData] = useState<T[] | null>(null);

  useEffect(() => {
    if (!enabler || !url) return;

    setLoading(true);

    const config: AxiosRequestConfig = {
      params,
      headers,
    };

    api
      .get(url, config)
      .then((response) => {
        Array.isArray(response.data)
          ? setData(response.data)
          : setData([response.data]);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, data, error };
}
