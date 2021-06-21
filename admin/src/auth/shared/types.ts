import { IUserData } from '@shared/types';

export type LoginType = (args:
{ username: string; password: string; }
) => Promise<IUserData>;

export interface IAuthContext {
  isLoggedIn: boolean;
  userData: null | IUserData;
  isLoading: boolean;

  login: LoginType;
  logOut(): Promise<void>;
}
