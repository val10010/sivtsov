import axios from 'axios';

// Default instance
export const instance = axios.create({
    baseURL: '',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});
