import strings from '@shared/constants/strings';
import { useAuth } from '@auth';
import notify from '@shared/services/notify';
import LoginForm, { OnSubmitType } from './LoginForm';

import './style.scss';

export default function Login(): JSX.Element {
  const auth = useAuth();
  const doLogin: OnSubmitType = ({ username, password }) => {
    auth.login({ username, password }).then(() => {
      notify.success({
        description: strings.auth.login.SUCCESS,
      });
      auth.redirectToPrivate();
    }).catch((e) => {
      notify.error({
        description: e.message,
      });
    });
  };

  return (
    <div className="Login w-screen h-screen flex items-center justify-center bg-smoke">
      <div className="Login__Container bg-white shadow-md p-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          {strings.auth.login.TITLE}
        </h1>
        <LoginForm
          onSubmit={doLogin}
        />
      </div>
    </div>
  );
}
