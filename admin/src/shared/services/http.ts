/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { GenericHTTPResponseType, IRequestReturnValue } from '@shared/types';
import auth from './auth';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

interface IUnifiedRequestInit extends RequestInit {
  headers: Headers;
}

function addCredentialsIfLoggedIn(options: IUnifiedRequestInit): void {
  const token = auth.getToken();
  if (token) options.headers.set('Authorization', `Bearer ${token}`);
}

export default {
  async request<HTTPResponse>(
    url: string, options: RequestInit,
  ): IRequestReturnValue<HTTPResponse> {
    const unifiedOptions: IUnifiedRequestInit = {
      ...options,
      headers: options.headers ? new Headers(options.headers) : new Headers(),
    };

    addCredentialsIfLoggedIn(unifiedOptions);

    unifiedOptions.headers.set('Content-Type', 'application/json');

    const res = await fetch(`${BASE_URL}${url}`, unifiedOptions);

    const result: GenericHTTPResponseType<HTTPResponse> = await res.json();

    if (result.status === 'ok') return result.data;
    throw new Error(result.data);
  },
  get<HTTPResponse>(
    url: string, options: RequestInit = {},
  ): IRequestReturnValue<HTTPResponse> {
    return this.request(url, {
      ...options,
      method: 'GET',
    });
  },
  post<HTTPResponse>(
    url: string, data: any, options: RequestInit = {},
  ): IRequestReturnValue<HTTPResponse> {
    return this.request(url, {
      ...options,
      body: JSON.stringify(data) as any,
      method: 'POST',
    });
  },
  put<HTTPResponse>(
    url: string, data: any, options: RequestInit = {},
  ): IRequestReturnValue<HTTPResponse> {
    return this.request(url, {
      ...options,
      body: JSON.stringify(data) as any,
      method: 'PUT',
    });
  },
  patch<HTTPResponse>(
    url: string, data: any, options: RequestInit = {},
  ): IRequestReturnValue<HTTPResponse> {
    return this.request(url, {
      ...options,
      body: JSON.stringify(data) as any,
      method: 'PATCH',
    });
  },
  delete<HTTPResponse>(
    url: string, options: RequestInit = {},
  ): IRequestReturnValue<HTTPResponse> {
    return this.request(url, {
      ...options,
      method: 'DELETE',
    });
  },
};
