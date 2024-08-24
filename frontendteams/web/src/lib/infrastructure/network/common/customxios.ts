import axios from 'axios';
import { API_VERSION } from './endpoints';

const customAxios = axios.create({
  headers: {
    version: API_VERSION
  },
});

export default customAxios;