import axios from 'axios';

const fetchUser = axios.create({
    baseURL: 'http://localhost:3000/users/',
    headers: {
        Accept: 'application/json'
    }
})

export default fetchUser;