import http from '../../config/http.config';

const getResponse = res => ({
  type: 'RESPONSE',
  data: res
});

export const getData = (url, config) => dispatch => http.get(url, config)
  .then((response) => {
    dispatch(getResponse(response));
  })
  .catch(error => console.log(error));
