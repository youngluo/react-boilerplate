import axios from 'axios';

// 通过axios拦截器统一处理数据
axios.interceptors.request.use(config => config, error => Promise.reject(error));

axios.interceptors.response.use(
  response =>
  // 此处可对响应数据进行处理，比如数据请求错误时给出提示
    response.data.data
  , error => Promise.reject(error)
);
