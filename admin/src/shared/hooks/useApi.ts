import { useAuth } from '@auth';
import { useCallback, useState } from 'react';

type CBFnType<T, P> = (()=>Promise<T>) | ((arg: P)=>Promise<T>);

interface IUseApi<T, P, E> {
  execute: CBFnType<T, P>;
  data: T | null;
  error: E | null;
  isLoading: boolean;
}

export default function useApi<T, P = void, E = string>(
  fn: CBFnType<T, P>,
): IUseApi<T, P, E> {
  const { redirectToPublic } = useAuth();
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

        if (e.response.status === 401) {
          redirectToPublic();
        }

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
