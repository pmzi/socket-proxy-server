import { authAPI } from '@api';
import strings from '@shared/constants/strings';
import authService from '@shared/services/auth';
import notify from '@shared/services/notify';
import { IUserData } from '@shared/types';
import { useEffect, useState } from 'react';

import AuthContext from './shared/AuthContext';
import { LoginType } from './shared/types';

interface IProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: IProps): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.checkLoginState());
  const [userData, setUserData] = useState<null | IUserData>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getUserData() {
    setIsLoading(true);

    try {
      const fetchedUserData = await authAPI.getUserData();
      setUserData(fetchedUserData);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setIsLoggedIn(false);

      notify.error({
        message: strings.auth.GET_USER_DATA_ERROR_TITLE,
        description: e.message,
      });
    }
  }

  const loginAndGetUserData: LoginType = async (
    { username, password }: { username: string; password: string; },
  ) => {
    setIsLoading(true);

    try {
      const token = await authAPI.login({ username, password });

      authService.login(token);

      const fetchedUserData = await authAPI.getUserData();
      setUserData(fetchedUserData);

      setIsLoggedIn(true);

      setIsLoading(false);

      return fetchedUserData;
    } catch (e) {
      setIsLoading(false);

      throw e;
    }
  };

  function logOut() {
    authService.removeToken();

    setIsLoggedIn(false);

    return Promise.resolve();
  }

  useEffect(() => {
    if (isLoggedIn) {
      getUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={
      {
        isLoggedIn,
        userData,
        isLoading,

        login: loginAndGetUserData,
        logOut,
      }
    }>
      {children}
    </AuthContext.Provider>
  );
}
