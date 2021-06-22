import { useEffect, useMemo } from 'react';
import { Skeleton } from 'antd';

import { adminAPI } from '@api';
import strings from '@shared/constants/strings';
import useApi from '@shared/hooks/useApi';
import notify from '@shared/services/notify';
import AdminListTable from './AdminListTable';

export default function AdminList(): JSX.Element {
  const {
    isLoading, data, execute,
  } = useApi(adminAPI.getAdmins);

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
        {strings.admin.list.TITLE}
      </h1>

      {content}
    </div>
  );
}
