import axios from 'axios';
import general from '../config/general';
import {store} from '../store';

const api = axios.create({
  baseURL: general.baseURL,
  timeout: 60000,
});

api.interceptors.request.use(
  function (config) {
    config.url = config.url + `&appid=${general.apiKey}`;
    console.log(config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  function (response) {
    // console.log('config axios success', response);
    return response;
  },
  function (error) {
    // console.log('config axios failure', error);
    return Promise.reject(error);
  },
);
export default api;
