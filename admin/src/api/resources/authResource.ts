import http from '@shared/services/http';
import { IRequestReturnValue, IUserData } from '@shared/types';
import { AUTH_LOGIN, AUTH_USER_DATA } from './shared/endpoints';

export type LoginReturnType = string;
export type GetUserDataReturnType = IUserData;

export default {
  login(
    { username, password }
    : { username: string; password: string },
  ): IRequestReturnValue<LoginReturnType> {
    return http.post<string>(AUTH_LOGIN, {
      username,
      password,
    });
  },
  getUserData(): IRequestReturnValue<IUserData> {
    return http.get<GetUserDataReturnType>(AUTH_USER_DATA);
  },
};
