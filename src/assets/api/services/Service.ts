import { axiosAPI } from '../index';

let config:object = {
    headers: {
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json',
    }
}

export async function login(loginDTO:LoginDTO) {
    return axiosAPI.post('/login/', loginDTO, config);
}
  
export async function getProfile(token:string) {
    let configToken:object = {
        headers: {
            'Accept': 'application/json;version=v1_web',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }
    return axiosAPI.get('/profile/', configToken);
}