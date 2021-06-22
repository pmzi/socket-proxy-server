import { useEffect, useMemo } from 'react';
import { Skeleton } from 'antd';

import { IGetReportsReturn } from '@/api/resources/reportResource';
import { reportAPI } from '@api';
import strings from '@shared/constants/strings';
import useAsync from '@shared/hooks/useAsync';
import notify from '@shared/services/notify';
import PanelReportTable from './PanelReportTable';

export default function PanelReport(): JSX.Element {
  const {
    isLoading, data, execute,
  } = useAsync<IGetReportsReturn>(reportAPI.getReports);

  const normalizedData = useMemo(() => {
    if (!data) return null;
    return data.rows.map(({
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
      <h2 className="text-4xl font-bold mb-8">
        {strings.panel.report.TITLE}
      </h2>

      {content}
    </div>
  );
}
