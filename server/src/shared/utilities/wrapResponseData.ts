interface IResponseData<T> {
  status: 'ok' | 'error';
  data: T;
}

export default function wrapResponseData(
  data: unknown, isError = false,
): IResponseData<typeof data> {
  return {
    status: isError ? 'error' : 'ok',
    data,
  };
}
