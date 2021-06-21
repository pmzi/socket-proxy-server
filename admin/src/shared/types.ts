export interface IUserData {
  username: string;
}

interface ISuccessHTTPResponse<T> {
  status: 'ok';
  data: T;
}

interface IErrorHTTPResponse<E = string> {
  status: 'error';
  data: E;
}

// eslint-disable-next-line max-len
export type GenericHTTPResponseType<T, E = string> = IErrorHTTPResponse<E> | ISuccessHTTPResponse<T>;

export type IRequestReturnValue<T> = Promise<T>;
