import { useEffect, useMemo } from 'react';
import { Skeleton } from 'antd';

import { blackListAPI } from '@api';
import strings from '@shared/constants/strings';
import useAsync from '@shared/hooks/useAsync';
import notify from '@shared/services/notify';
import ShowBlackListTable from './ShowBlackListTable';

export default function ShowBlackList(): JSX.Element {
  const {
    isLoading, data, execute,
  } = useAsync(blackListAPI.getBlackList);

  const normalizedData = useMemo(() => {
    if (!data) return null;
    return data.map(({
      id, target, createdAt,
    }) => ({
      id, target, createdAt,
    }));
  }, [data]);

  useEffect(() => {
    execute().catch((e) => {
      notify.error({ description: e.message });
    });
  }, []);

  let content = <Skeleton active={true} loading={true} />;
  if (normalizedData && !isLoading) {
    content = <ShowBlackListTable
      data={normalizedData}
    />;
  }

  return (
    <div>
      <h1>
        {strings.blackList.list.TITLE}
      </h1>

      {content}
    </div>
  );
}
