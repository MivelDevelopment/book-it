import axios from 'axios';

const fetchUser = axios.create({
    baseURL: 'http://localhost:3333/users/',
    headers: {
        Accept: 'application/json'
    }
})

export default fetchUser;