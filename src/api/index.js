import axios from 'axios';

let base = 'http://10.39.0.113:8080';

export const getCallList = params => { return axios.get(`${base}/calls`, { params: params }); };

export const getPhoneList = params => { return axios.get(`${base}/phones`, { params: params }); };