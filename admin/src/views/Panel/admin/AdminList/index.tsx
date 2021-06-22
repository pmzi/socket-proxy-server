import { useEffect, useMemo } from 'react';
import { Skeleton } from 'antd';

import { adminAPI } from '@api';
import strings from '@shared/constants/strings';
import useAsync from '@shared/hooks/useAsync';
import notify from '@shared/services/notify';
import AdminListTable from './AdminListTable';

export default function AdminList(): JSX.Element {
  const {
    isLoading, data, execute,
  } = useAsync(adminAPI.getAdmins);

  const normalizedData = useMemo(() => {
    if (!data) return null;
    return data.map(({
      id, username,
    }) => ({
      id, username,
    }));
  }, [data]);

  useEffect(() => {
    execute().catch((e) => {
      notify.error({ description: e.message });
    });
  }, []);

  let content = <Skeleton active={true} loading={true} />;
  if (normalizedData && !isLoading) {
    content = <AdminListTable
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
