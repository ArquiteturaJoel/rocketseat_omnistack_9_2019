import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.3:3333'
});

function getBaseURL() {return '172.17.14.116';}

export default api;