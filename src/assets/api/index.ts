import axios from 'axios';

const baseURL = 'https://api.homologation.cliqdrive.com.br/auth';

export const axiosAPI = axios.create({
  baseURL,
});
