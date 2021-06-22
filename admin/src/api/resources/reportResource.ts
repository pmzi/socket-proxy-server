import http from '@shared/services/http';
import { IRequestReturnValue } from '@shared/types';
import { GET_REPORTS } from './shared/endpoints';

interface IGetReportsReturnRow {
  id: number;
  target: string;
  length?: number;
  isBlocked: boolean;
  createdAt: string;
}

export type IGetReportsReturn = IGetReportsReturnRow[];

export default {
  getReports(): IRequestReturnValue<IGetReportsReturn> {
    return http.get<IGetReportsReturn>(GET_REPORTS);
  },
};
