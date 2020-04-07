import axios from 'axios';

// Create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 30000 // request timeout
});

// Add a request interceptor
service.interceptors.request.use(config => {
    // Do something before request is sent
    return config;
}, error => {
    // Do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use(response => {
    // Do something with response data
    return response.data;
}, error => {
    // Do something with response error
    console.log(error); // for debug
    return Promise.reject(error);
});

export default service;
