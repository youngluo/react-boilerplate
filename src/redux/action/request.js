import http from '../../services/http';

const getResponse = (res) => {
    return {
        type: 'RESPONSE',
        data: res
    }
}

export const getData = (url, config) => {
    return (dispatch) => {
        return http.get(url, config)
            .then(response => {
                dispatch(getResponse(response));
            })
            .catch(error => console.log(error))
    }
}