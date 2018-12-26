import axios from 'axios';

let base = 'http://10.39.0.113:8080';

export const getCallList = params => { return axios.get(`${base}/calls`, { params: params }); };

export const getCallExcel = params => { return axios.get(`${base}/calls-excel`, { params: params, responseType: 'blob' }); };


/*axios({
    url: 'http://10.39.0.113:8080/calls-excel',
    method: 'GET',
    responseType: 'blob', // important
}).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.xlsx');
    document.body.appendChild(link);
    link.click();
})*/

export const getPhoneList = params => { return axios.get(`${base}/phones`, { params: params }); };