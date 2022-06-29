import axios from "axios";
import ResourceRoute from "../Resource";
class LoginResource extends ResourceRoute{
    constructor(resource) {
        this.resource = resource ? resource: "";
        this.baseUrl = SERVER_DOMAIN + `/api/${apiVersion}/`;
    }
    login(data) {
        return axios.post(`${this.baseUrl}${this.resource}/login`,data);
     }
}
export default LoginResource;
