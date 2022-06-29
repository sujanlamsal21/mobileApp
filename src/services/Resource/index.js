import React from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux';

const SERVER_DOMAIN = "https://erpqc.whetstoneassociates.net";

const apiVersion = "v1.0";

class ResourceRoute {
    
    constructor(resource,config) {
        this.resource = resource ? resource: "";
        this.baseUrl = SERVER_DOMAIN + `/api/${apiVersion}/`;
        this.config = config;
    }

    login(data) {
        return axios.post(`${this.baseUrl}${this.resource}/login`,data);
     }
     index(){
        return axios.get(`${this.baseUrl}${this.resource}`,this.config);
    }
     getAttendance(){
         return axios.get(`${this.baseUrl}${this.resource}`,this.config);
     }
     setAttendance(data){
         return axios.post(`${this.baseUrl}${this.resource}`,data,this.config);
     }
}
export default ResourceRoute;