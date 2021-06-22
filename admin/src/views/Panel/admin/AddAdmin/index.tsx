import { adminAPI } from '@api';
import Card from '@shared/components/Card';
import { useHistory } from 'react-router-dom';
import { PANEL_ADMIN_LIST } from '@shared/constants/routes';
import strings from '@shared/constants/strings';
import useApi from '@shared/hooks/useApi';
import notify from '@shared/services/notify';
import AddAdminForm, { OnSubmitType } from './AddAdminForm';

export default function AddAdmin(): JSX.Element {
  const { isLoading, execute } = useApi(adminAPI.addAdmin);
  const history = useHistory();

  const onSubmit: OnSubmitType = ({ username, password }) => {
    execute({
      username,
      password,
    }).then(() => {
      notify.success({ description: strings.blackList.add.SUCCESS });

      history.push(PANEL_ADMIN_LIST);
    }).catch((e) => {
      notify.error({
        description: e.message,
      });
    });
  };

  return (
    <div>
      <h1>
        {strings.admin.add.TITLE}
      </h1>

      <Card>
        <AddAdminForm
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </Card>
    </div>
  );
}
