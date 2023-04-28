import axios from 'axios';
// import store from '@/shared/consts/store';

const httpService = axios.create({
    baseURL: 'http://localhost:8085/ticket-api/',
    headers: { 'X-Requested-With': 'XMLHttpRequest'}
});

// httpService.interceptors.request.use((config) => {
//     const token = localStorage.getItem('user-token')
  
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
  
//     return config
//   }, (err) => {
//     return Promise.reject(err)
//   })
  
//   httpService.interceptors.response.use((response) => {
//     return response
//   }, (error) => {
//     if (error.response.status === 401) {
//       window.location = '#/home'
//     }
  
//     return Promise.reject(error)
//   })

export default httpService;
