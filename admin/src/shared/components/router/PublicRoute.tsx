import { useAuth } from '@auth';
import { useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';

export default function PublicRoute(props: RouteProps): JSX.Element {
  const { isLoggedIn, redirectToPrivate } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      redirectToPrivate();
    }
  }, [isLoggedIn]);
  return (
    <Route {...props} />
  );
}
