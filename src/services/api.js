import axios from 'axios';

export default axios.create({
    baseURL: 'http://192.168.1.66:5000/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token') ? localStorage.getItem('token'): ""
    }
});