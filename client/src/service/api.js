// the service folder will save the information regarding the Apis
// we will use the axios

import axios from 'axios';

import {API_NOTIFICATIONS_MSG,  SERVICE_URLS } from '../constants/config';


const API_URL = 'https://localhost:8000'; //our backend is running at this port

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers:{
        "Content-Type": "application/json"
    }
});

axiosInstance.interceptors.request.use(
    function(config){
        return config;

    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function (response){
        //stop global loader here 
        return processResponse(response);
    },
    function(error){
        return Promise.reject(processError(error));
    }

)


const processResponse = (response) =>{
    if(response?.status===200){
        return {isSuccess:true,data: response.data}

    }else {
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}


const processError = (error) =>{
    if(error === 'Network Error' && !error.response){
        toast.error('Make sure the API is running');
    }
    if(error.response){
        // request has been sent to server but the server respoded woth different status code
        // that falls out of the range 
        console.log("Error in Respnse", error.toJSON());
        return {
            isError:true,
            msg: API_NOTIFICATIONS_MSG.responseFailure,
            code: ""
        }

    } else if(error.request){
        //  request has been made but no response received
        console.log("Error in Request:", error.toJSON())
        return {
            isError: true,
            msg: API_NOTIFICATIONS_MSG.requestFaiure,
            code: ""
        }
    }
    else{
        //  something happened to the setting up request 
        console.log("ERROR in NETWOR:",error.toJSON());
        return {
            isError: true,
            msg: API_NOTIFICATIONS_MSG.networkError,
            code: ""
        }

    }
}

const API = {};

for (const [key,value]of Object.entries(SERVICE_URLS)) {
    API[key] = (body,showUploadProgress, showDownloadProgresss)=>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: body,
            responseType: value.responseType,
            onUploadProgress: function (ProgressEvent) {
                if(showUploadProgress){
                    let percentageCompleted = Math.round((ProgressEvent.loaded*100)/ProgressEvent.total)
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: function(ProgressEvent) {
                if(showDownloadProgresss) {
                    let percentageCompleted = Math.round((ProgressEvent.loaded*100) / ProgressEvent.total)
                    showDownloadProgresss(percentageCompleted);
                }
            }
        })
    }

export {API};


