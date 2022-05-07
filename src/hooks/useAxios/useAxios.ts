import { useCallback, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { atom, useAtom } from 'jotai';

let axiosResponse: any;

interface axiosRequestTypes extends AxiosRequestConfig {
  delay?: number;
  body?: any;
  headers?: any;
}

const dataAtom = atom<{} | undefined>({});
const loadingAtom = atom({});
const erroAtom = atom({});

const useAxios = ({ url, method, params, body = null, headers = null }: axiosRequestTypes) => {
  const [dataResponse, setDataResponse] = useAtom(dataAtom);
  const [loading, setLoading] = useAtom(loadingAtom);
  const [erro, setErro] = useAtom(erroAtom);

  const fetchData = useCallback(async () => {
    try {
      axiosResponse = await axios({
        url: url,
        method: method,
        params: params,
        data: body,
        headers: headers,
        baseURL: `https://bus-iot.herokuapp.com/`,
        onUploadProgress: () => {
          setLoading(true);
        },
      });
    } catch (error: any) {
      if (error.response) {
        setDataResponse(undefined);
        setErro(error);
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

  return {
    axiosRequest: {
      dataResponse,
      loading,
      erro,
    },
  };
};

export default useAxios;
