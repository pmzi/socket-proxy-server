import axios, { AxiosRequestConfig } from 'axios';

type HTTPRequestReturn<T> = Promise<HTTPResponseStructure<T>>;
interface HTTPResponseStructure<T> {
  status: 'ok' | 'error';
  data: T;
}

const axiosInstance = axios.create({
  baseURL: process.env.SERVER_BASE,
});

export default {
  async request<HTTPResponse>(options: AxiosRequestConfig = {}): HTTPRequestReturn<HTTPResponse> {
    const { data } = await axiosInstance.request<HTTPResponseStructure<HTTPResponse>>(options);

    return data;
  },
  post<HTTPResponse>(
    url: string, data: any, options: AxiosRequestConfig = {},
  ): HTTPRequestReturn<HTTPResponse> {
    return this.request<HTTPResponse>({
      url,
      data,
      method: 'POST',
      ...options,
    });
  },
  put<HTTPResponse>(
    url: string, data: any, options: AxiosRequestConfig = {},
  ): HTTPRequestReturn<HTTPResponse> {
    return this.request<HTTPResponse>({
      url,
      data,
      method: 'PUT',
      ...options,
    });
  },
  patch<HTTPResponse>(
    url: string, data: any, options: AxiosRequestConfig = {},
  ): HTTPRequestReturn<HTTPResponse> {
    return this.request<HTTPResponse>({
      url,
      data,
      method: 'PATCH',
      ...options,
    });
  },
  delete<HTTPResponse>(
    url: string, options: AxiosRequestConfig = {},
  ): HTTPRequestReturn<HTTPResponse> {
    return this.request<HTTPResponse>({
      url,
      method: 'DELETE',
      ...options,
    });
  },
  get<HTTPResponse>(
    url: string, options: AxiosRequestConfig = {},
  ): HTTPRequestReturn<HTTPResponse> {
    return this.request<HTTPResponse>({
      url,
      method: 'GET',
      ...options,
    });
  },
};
