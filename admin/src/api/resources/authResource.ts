import http from '@shared/services/http';
import { IRequestReturnValue, IUserData } from '@shared/types';
import { AUTH_LOGIN, AUTH_USER_DATA } from './shared/endpoints';

export default {
  login(
    { username, password }
    : { username: string; password: string },
  ): IRequestReturnValue<string> {
    return http.post<string>(AUTH_LOGIN, {
      username,
      password,
    });
  },
  getUserData(): IRequestReturnValue<IUserData> {
    return http.get<IUserData>(AUTH_USER_DATA);
  },
};
