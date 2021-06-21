import { IUserData } from '@shared/types';
import React from 'react';

interface IAuthContext {
  isLoggedIn: boolean;
  userData: null | IUserData;
  isLoading: boolean;

  login(args: { username: string; password: string; }): Promise<IUserData>;
  logOut(): Promise<void>;
}

const AuthContext = React.createContext<IAuthContext>({
  isLoggedIn: false,
  userData: null,
  isLoading: false,

  login() {
    return Promise.resolve({
      username: '',
    });
  },
  logOut() {
    return Promise.resolve();
  },
});

export default AuthContext;
