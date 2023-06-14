// This file help to show the API_MESSAGES

const API_NOTIFICATIONS_MSG = {
    loading: {
        title: 'Loading...',
        message: 'Please wait , Loading'
    },
    success:    {
        title : 'succes',
        message : 'Loaded Succesfully'
    },

    responseFailure:{
        title: 'Error',
        message: 'An error occured while fetching response from the server. Please try Later'
    },

    requestFaiure:{
        title: 'Error',
        message: 'En error occured while parsing request data'
    },

    networkError:{
        title: 'Error',
        message: 'Unable to connect with the server. Please Check internet connectivity'
    }
}

export  {API_NOTIFICATIONS_MSG};
// we have to export the messages to use them there


// API service call
// Sample Request 
// NEED SERVICE ca

export const SERVICE_URLS = {
    userSignup : {url :'/signup', method: 'POST'}
}

