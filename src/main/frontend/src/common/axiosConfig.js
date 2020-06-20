import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { 
        "Access-Control-Allow-Origin": "*",
        contentType: "application/json; charset=utf-8",
    }
});

export default instance;


