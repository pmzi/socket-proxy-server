import http from '@shared/services/http';
import { IRequestReturnValue } from '@shared/types';
import { ADD_BLACK_LIST, DELETE_BLACK_LIST, GET_BLACK_LIST } from './shared/endpoints';

interface IBlackListTarget {
  target: string;
}
interface IBlackListItem extends IBlackListTarget {
  id: number;
  createdAt: string;
}
export type AddBlackListArgType = {
  target: string;
};

export type AddBlackListReturnType = IBlackListItem;

export type GetBlackListReturnType = IBlackListItem[];

export type RemoveBlackListReturnType = string;
export type RemoveBlackListArgType = IBlackListTarget;

export default {
  addBlackList({ target }: AddBlackListArgType): IRequestReturnValue<AddBlackListReturnType> {
    return http.post<AddBlackListReturnType>(ADD_BLACK_LIST, { target });
  },
  getBlackList(): IRequestReturnValue<GetBlackListReturnType> {
    return http.get<GetBlackListReturnType>(GET_BLACK_LIST);
  },
  removeBlackList(
    { target }: RemoveBlackListArgType,
  ): IRequestReturnValue<RemoveBlackListReturnType> {
    return http.delete<RemoveBlackListReturnType>(DELETE_BLACK_LIST(target));
  },
};
