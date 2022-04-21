import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3333';
axios.defaults.headers.common['Accept'] = 'application/json';