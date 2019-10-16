import axios from 'axios';

const api = axios.create({
    baseURL: 'SUA_URL_AQUI'
    //exemplo de URL = 'http://192.168.1.1:3333', essa url é a url do seu servidor/pc seguida pela porta de comunicação
});

export default api;