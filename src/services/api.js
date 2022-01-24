import axios from 'axios';
import apiurl from './apiurl';

export default axios.create({
    baseURL: apiurl + '/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'authorization': localStorage.getItem('token') ? localStorage.getItem('token'): ""
    }
});