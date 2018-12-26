import axios from 'axios';

let base = 'http://10.39.0.113:8080';

export const getCallList = params => { return axios.get(`${base}/calls`, { params: params }); };

export const getCallExcel = params => { return axios.get(`${base}/calls-excel`, { params: params, responseType: 'blob' }); };

export const getCallExcelGroup = params => { return axios.get(`${base}/calls-excel-group`, { params: params, responseType: 'blob' }); };

export const getPhoneList = params => { return axios.get(`${base}/phones`, { params: params }); };