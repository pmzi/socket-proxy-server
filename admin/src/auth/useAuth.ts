import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import authService from '@shared/services/auth';
import AuthContext from './shared/AuthContext';
import { IAuthContext } from './shared/types';

interface IUseAuth extends IAuthContext {
  redirectToPublic: () => void;
  redirectToPrivate: () => void;
}

export default function useAuth(): IUseAuth {
  const auth = useContext(AuthContext);
  const history = useHistory();

  return {
    ...auth,
    redirectToPublic() {
      history.replace(authService.PUBLIC_ROUTE);
    },
    redirectToPrivate() {
      history.replace(authService.PRIVATE_ROUTE);
    },
  };
}
