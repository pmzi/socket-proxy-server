/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { GenericHTTPResponseType, IRequestReturnValue } from '@shared/types';
import auth from './auth';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

function addCredentialsIfLoggedIn(options: Request): void {
  const token = auth.getToken();
  if (token) options.headers.set('Authorization', `Bearer ${token}`);
}

export default {
  async request<HTTPResponse>(
    url: string, options: Request,
  ): IRequestReturnValue<HTTPResponse> {
    addCredentialsIfLoggedIn(options);

    const res = await fetch({
      ...options,
      url: `${BASE_URL}${url}`,
    });

    const result: GenericHTTPResponseType<HTTPResponse> = await res.json();

    if (result.status === 'ok') return result.data;
    throw new Error(result.data);
  },
  get<HTTPResponse>(
    url: string, options: Request = new Request(url),
  ): IRequestReturnValue<HTTPResponse> {
    return this.request(url, {
      ...options,
      method: 'GET',
    });
  },
  post<HTTPResponse>(
    url: string, data: any, options: Request = new Request(url),
  ): IRequestReturnValue<HTTPResponse> {
    return this.request(url, {
      ...options,
      body: JSON.stringify(data) as any,
      method: 'POST',
    });
  },
  put<HTTPResponse>(
    url: string, data: any, options: Request = new Request(url),
  ): IRequestReturnValue<HTTPResponse> {
    return this.request(url, {
      ...options,
      body: JSON.stringify(data) as any,
      method: 'PUT',
    });
  },
  patch<HTTPResponse>(
    url: string, data: any, options: Request = new Request(url),
  ): IRequestReturnValue<HTTPResponse> {
    return this.request(url, {
      ...options,
      body: JSON.stringify(data) as any,
      method: 'PATCH',
    });
  },
  delete<HTTPResponse>(
    url: string, options: Request = new Request(url),
  ): IRequestReturnValue<HTTPResponse> {
    return this.request(url, {
      ...options,
      method: 'DELETE',
    });
  },
};
