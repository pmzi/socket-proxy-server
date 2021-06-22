import { blackListAPI } from '@api';
import Card from '@shared/components/Card';
import { useHistory } from 'react-router-dom';
import { PANEL_SHOW_BLACK } from '@shared/constants/routes';
import strings from '@shared/constants/strings';
import useApi from '@shared/hooks/useApi';
import notify from '@shared/services/notify';
import AddBlackListForm, { OnSubmitType } from './AddBlackListForm';

export default function AddBlackList(): JSX.Element {
  const { isLoading, execute } = useApi(blackListAPI.addBlackList);
  const history = useHistory();

  const onSubmit: OnSubmitType = ({ target }) => {
    execute({
      target,
    }).then(() => {
      notify.success({ description: strings.blackList.add.SUCCESS });

      history.push(PANEL_SHOW_BLACK);
    }).catch((e) => {
      notify.error({
        description: e.message,
      });
    });
  };

  return (
    <div>
      <h1>
        {strings.blackList.add.TITLE}
      </h1>

      <Card>
        <AddBlackListForm
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </Card>
    </div>
  );
}
