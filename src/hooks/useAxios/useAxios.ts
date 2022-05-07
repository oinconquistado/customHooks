import { useCallback, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

let axiosResponse: any;

interface axiosRequestTypes extends AxiosRequestConfig {
  delay?: number;
  body?: any;
  headers?: any;
}

const useAxios = ({ url, method, params, body = null, headers = null }: axiosRequestTypes) => {
  const { axiosData } = AxiosContext();
  const { setDataResponse, setLoading, setError } = axiosData;

  const fetchData = useCallback(async () => {
    try {
      axiosResponse = await axios({
        url: url,
        method: method,
        params: params,
        data: body,
        headers: headers,
        baseURL: `https://bus-iot.herokuapp.com/`,
        onUploadProgress: setLoading(true),
      });
    } catch (error: any) {
      if (error.response) {
        setDataResponse(undefined);
        setError(error);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    } finally {
      if (axiosResponse.status === 200) {
        setDataResponse(axiosResponse.data);
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers, fetchData]);
};

export default useAxios;
