import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token') ? localStorage.getItem('token'): ""
    }
});