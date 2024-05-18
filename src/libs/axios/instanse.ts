import axios from 'axios';
import { getSessionAccessToken } from '../../utils/auth-storage-manager';

export const axiosInstanse = axios.create({
  baseURL: 'https://topdragon.co.kr',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer ${getSessionAccessToken()}`,
  },
});
