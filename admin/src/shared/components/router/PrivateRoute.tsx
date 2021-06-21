import { useEffect } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useAuth } from '@auth';

export default function PrivateRoute(props: RouteProps): JSX.Element {
  const { isLoggedIn, redirectToPublic } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) redirectToPublic();
  }, [isLoggedIn]);

  return (
    <Route {...props} />
  );
}
