require('es6-promise').polyfill();
import axios from 'axios';
import store from '../redux/store';
import { setLoading } from '../redux/action';

axios.interceptors.request.use((config) => {
    store.dispatch(setLoading(true));
    return config;
}, (error) => Promise.reject(error));

axios.interceptors.response.use((response) => {
    store.dispatch(setLoading(false));
    return response.data.data;
}, (error) => Promise.reject(error));

const get = (url, config) => axios.get(url, config);

const post = (url, data, config) => axios.post(url, data, config);

export default { get, post };