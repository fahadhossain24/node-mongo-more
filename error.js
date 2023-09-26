const {errorHandler} = require('./globalErrorHandler')

// import {errorHandler} from "./globalErrorHandler.js";

const getData = () => {
    try{
        // console.log(undefined.find())
        const emailError = new Error('email already exist!!!');
        throw emailError;
    }catch(err){
        errorHandler(err)
    }
}
getData()

console.log('next code')
