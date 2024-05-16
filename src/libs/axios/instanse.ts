import axios from 'axios';
import { Access_Token } from '../../utils/token';

export const axiosInstanse = axios.create({
  baseURL: 'https://topdragon.co.kr',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `bearer${Access_Token}`,
  },
});
//bearer찾는법
