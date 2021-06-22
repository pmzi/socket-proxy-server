import { useEffect, useMemo } from 'react';
import { Skeleton } from 'antd';

import { IGetReportsReturn } from '@/api/resources/reportResource';
import { reportAPI } from '@api';
import strings from '@shared/constants/strings';
import useApi from '@shared/hooks/useApi';
import notify from '@shared/services/notify';
import PanelReportTable from './PanelReportTable';

export default function PanelReport(): JSX.Element {
  const {
    isLoading, data, execute,
  } = useApi<IGetReportsReturn>(reportAPI.getReports);

  const normalizedData = useMemo(() => {
    if (!data) return null;
    return data.map(({
      id, target, length, isBlocked, createdAt,
    }) => ({
      id, target, length, isBlocked, createdAt,
    }));
  }, [data]);

  useEffect(() => {
    execute().catch((e) => {
      notify.error({ description: e.message });
    });
  }, []);

  let content = <Skeleton active={true} loading={true} />;
  if (normalizedData && !isLoading) {
    content = <PanelReportTable
      data={normalizedData}
    />;
  }

  return (
    <div>
      <h1>
        {strings.panel.report.TITLE}
      </h1>

      {content}
    </div>
  );
}
