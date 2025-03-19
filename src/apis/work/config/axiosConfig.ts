import envConfig from '@configs/env/envConfig.config';
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

const baseApiUrl = `${envConfig.VITE_APP_API_URL}/work/employee/oauth/oauth2`;

const config: AxiosRequestConfig = {
  baseURL: baseApiUrl,
  headers: {
    contentType: 'application/x-www-form-urlencoded, multipart/form-data',
  },
};

const axiosInstance = axios.create(config);

const axios_work_config = (payload: {
  method: Method;
  url: string;
  data?: unknown;
}) => {
  const { method, url, data } = payload;
  const axiosRequestConfig: AxiosRequestConfig = {
    method,
    url,
    data,
  };

  return axiosInstance(axiosRequestConfig);
};

// Add a request interceptor
axiosInstance.interceptors.request.use();

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axios_work_config;
