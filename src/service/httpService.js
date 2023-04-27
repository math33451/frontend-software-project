import axios from 'axios';
import Qs from 'qs';
// import store from '@/shared/consts/store';

const httpService = axios.create({
    baseURL: '/ticket-api/',
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    withCredentials: true,
    paramsSerializer: params => Qs.stringify(params, { arrayFormat: 'repeat' })
});

// httpService.interceptors.request.use(function (config) {
//     store.setLoadding(true);
//     if(!store.state.count)
//         store.state.count = 0
//     store.state.count++

//     return config;
// })

export default httpService;
