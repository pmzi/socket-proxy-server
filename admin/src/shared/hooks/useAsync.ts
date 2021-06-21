import { useState } from 'react';

interface IUseAsync<T, E> {
  execute: ()=>Promise<T>;
  data: T | null;
  error: E | null;
  isLoading: boolean;
}

export default function useAsync<T, E = string>(
  fn: (...args: any[]) => Promise<T>, options = { init: true },
): IUseAsync<T, E> {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<E | null>(null);

  const execute: typeof fn = (...args) => {
    setIsLoading(true);

    return fn(...args).then((res) => {
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
  };

  if (options.init) execute();

  return {
    execute,
    isLoading,
    data,
    error,
  };
}
