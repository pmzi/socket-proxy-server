import { useAuth } from '@auth';
import { Skeleton } from 'antd';
import { useEffect } from 'react';

export default function Logout(): JSX.Element {
  const { logOut, redirectToPublic } = useAuth();

  useEffect(() => {
    logOut().then(() => {
      redirectToPublic();
    });
  }, []);

  return (
    <Skeleton />
  );
}
