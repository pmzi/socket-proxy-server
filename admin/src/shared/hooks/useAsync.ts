import { useCallback, useState } from 'react';

interface IUseAsync<T, P, E> {
  execute: (arg?: P)=>Promise<T>;
  data: T | null;
  error: E | null;
  isLoading: boolean;
}

export default function useAsync<T, P = unknown, E = string>(
  fn: (arg?: P) => Promise<T>,
): IUseAsync<T, P, E> {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback((arg?: P) => {
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
