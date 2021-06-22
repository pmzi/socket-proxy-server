import { Switch, Route, Redirect } from 'react-router-dom';
import PublicRoute from '@shared/components/router/PublicRoute';
import PrivateRoute from '@shared/components/router/PrivateRoute';

import Login from './Login';
import Panel from './Panel';

export default function Router(): JSX.Element {
  return (
    <Switch>
      <PublicRoute path="/login" component={Login} />

      <PrivateRoute path="/panel" component={Panel} />

      <Route>
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}
