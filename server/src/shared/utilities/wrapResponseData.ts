interface IResponseData<T> {
  status: 'ok';
  data: T;
}

export default function wrapResponseData<T>(data: T): IResponseData<T> {
  return {
    status: 'ok',
    data,
  };
}
