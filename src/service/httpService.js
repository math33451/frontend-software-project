import axios from 'axios';
import Qs from 'qs';
// import store from '@/shared/consts/store';

const httpService = axios.create({
    baseURL: '/ticket-api/',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    withCredentials: true,
    paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' })
});

httpService.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${token}`;
   
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
   );

export default httpService;
