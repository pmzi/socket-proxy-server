import { useCallback, useState } from 'react';

type CBFnType<T, P> = (()=>Promise<T>) | ((arg: P)=>Promise<T>);

interface IUseAsync<T, P, E> {
  execute: CBFnType<T, P>;
  data: T | null;
  error: E | null;
  isLoading: boolean;
}

export default function useAsync<T, P = void, E = string>(
  fn: CBFnType<T, P>,
): IUseAsync<T, P, E> {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback((arg: P) => {
    setIsLoading(true);

    return fn(arg).then((res) => {
      setIsLoading(false);

      setData(res);

      return res;
    })
      .catch((e) => {
        setError(e.message);
        throw e;
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fn]);

  return {
    execute,
    isLoading,
    data,
    error,
  };
}
