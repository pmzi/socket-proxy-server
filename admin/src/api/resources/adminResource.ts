import http from '@shared/services/http';
import { IRequestReturnValue } from '@shared/types';
import { ADD_ADMIN, GET_ADMINS } from './shared/endpoints';

interface ISingleAdmin {
  id: number;
  username: string
}

type AddAdminReturnType = ISingleAdmin;

type GetAdminsReturnType = ISingleAdmin[];

export default {
  addAdmin(
    { username, password }: { username: string, password: string },
  ): IRequestReturnValue<AddAdminReturnType> {
    return http.post<AddAdminReturnType>(ADD_ADMIN, { username, password });
  },
  getAdmins(): IRequestReturnValue<GetAdminsReturnType> {
    return http.get<GetAdminsReturnType>(GET_ADMINS);
  },
};
