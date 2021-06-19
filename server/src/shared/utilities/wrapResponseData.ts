interface IResponseData<T> {
  status: 'ok';
  data: T;
}

export default function wrapResponseData(data: unknown): IResponseData<typeof data> {
  return {
    status: 'ok',
    data,
  };
}
