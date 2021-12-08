import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
	baseURL: 'https://www.mercadobitcoin.net/api/', // inforbyte
});

export default api;
