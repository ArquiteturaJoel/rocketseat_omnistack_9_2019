import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.3:3333'
});

function getBaseURL() {return '192.168.1.3';}

export default api;