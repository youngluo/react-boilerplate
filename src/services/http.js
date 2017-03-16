require('es6-promise').polyfill();
import axios from 'axios';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Do something with response data
    
    return response;
}, function (error) {
    return Promise.reject(error);
});

const get = (url, config) => axios.get(url, config);

const post = (url, data, config) => axios.post(url, data, config);

export default { get, post };