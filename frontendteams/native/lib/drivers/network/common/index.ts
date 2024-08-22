import axios from 'axios';
import { API_VERSION } from './endpoints';


interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: any;
}

export const getCall = async <T>(url: string): Promise<T> => {
    const response = await axios.get<ApiResponse<T>>(url, {
        headers: {
          version: API_VERSION
        }
      });
    const { data } = response;
    if (data.success && data.data)
      return data.data;
    throw new Error(data.error);
};