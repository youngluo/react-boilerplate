require('es6-promise').polyfill();
import axios from 'axios';
import store from '../redux/store';
import { setLoading } from '../redux/action';

// 通过axios拦截器统一处理数据，以及loading的显示
axios.interceptors.request.use((config) => {
    // 发起请求前显示loading
    store.dispatch(setLoading(true));
    return config;
}, (error) => Promise.reject(error));

axios.interceptors.response.use((response) => {
    // 成功请求数据后关闭loading
    store.dispatch(setLoading(false));

    // 此处可对响应数据进行处理，比如数据请求错误时给出提示
    return response.data.data;
}, (error) => Promise.reject(error));

const get = (url, config) => axios.get(url, config);

const post = (url, data, config) => axios.post(url, data, config);

export default { get, post };