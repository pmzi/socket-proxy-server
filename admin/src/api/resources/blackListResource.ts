import http from '@shared/services/http';
import { IRequestReturnValue } from '@shared/types';
import { ADD_BLACK_LIST, GET_BLACK_LIST } from './shared/endpoints';

interface IBlackListTarget {
  target: string;
}
interface IBlackListItem extends IBlackListTarget {
  id: number;
  createdAt: string;
}
type AddBlackListArgType = {
  target: string;
};

type AddBlackListReturnType = IBlackListItem;

type GetBlackListReturnType = IBlackListItem[];

export default {
  addBlackList({ target }: AddBlackListArgType): IRequestReturnValue<AddBlackListReturnType> {
    return http.post<AddBlackListReturnType>(ADD_BLACK_LIST, { target });
  },
  getBlackList(): IRequestReturnValue<GetBlackListReturnType> {
    return http.get<GetBlackListReturnType>(GET_BLACK_LIST);
  },
};
