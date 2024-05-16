import { axiosAPI } from '../index';

export default interface LoginDTO {
    email:string;
    password:string;
}
let config = {
    headers: {
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json'
    }
  }

export async function login(loginDTO:LoginDTO) {
    return axiosAPI.post('/login/', loginDTO, config);
}
  
export async function getProfile() {
    return axiosAPI.get('/profile/', config);
}