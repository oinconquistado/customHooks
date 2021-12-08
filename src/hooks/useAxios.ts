import React, { useState, useCallback } from 'react';
import api from '../services/api';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface AxiosRequest {
	requestType: 'get' | 'post' | 'put' | 'delete' | 'update';
	url: string;
	options?: object;
}

const useAxios = () => {
	const [dataResponse, setDataResponse] = useState<object>();
	const [dataAxios, setDataAxios] = useState<object>();
	const [error, setError] = useState<string>();
	const [loading, setLoading] = useState<boolean>(false);
	let axiosResponse: AxiosResponse;

	const getData = useCallback(async (data: AxiosRequest) => {
		try {
			const values = Object.values(data);

			setLoading(true);
			axiosResponse = await api({
				method: values[0],
				url: values[1],
				data: values[2],
			});
		} catch (error) {
			setDataAxios(undefined);
			setDataResponse(undefined);
			console.log(error);
		} finally {
			setDataAxios(axiosResponse);
			setDataResponse(axiosResponse.data);
			setLoading(false);
		}
	}, []);

	return {
		getData,
		dataAxios,
		dataResponse,
		error,
		loading,
	};
};

export default useAxios;
