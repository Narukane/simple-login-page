import axios from 'axios';
import {BASE_URL} from '../constant/Constant';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface ErrorDetails {
  message: string;
  response?: {
    data: any;
    status: number;
    headers: any;
  };
  request?: any;
  config?: any;
}

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post('/login', {email, password});
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorDetails: ErrorDetails = {
        message: error.message,
        response: error.response,
        request: error.request,
        config: error.config,
      };
      throw errorDetails;
    }
  }
};
