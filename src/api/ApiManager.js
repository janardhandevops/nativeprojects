/* eslint-disable prettier/prettier */
import axios from "axios";

const ApiManager=axios.create({
    baseURL:'http://13.232.188.75:8080/api',
    responseType:'json',
    withCredentials:true,
});

export default ApiManager;

