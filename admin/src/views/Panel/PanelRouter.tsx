import {
  Switch, Route, useRouteMatch, Redirect,
} from 'react-router-dom';
import AddAdmin from './admin/AddAdmin';
import AddBlackList from './blackList/AddBlackList';
import ShowBlackList from './blackList/ShowBlackList';
import PanelReport from './PanelReport';
import AdminList from './admin/AdminList';
import Logout from './Logout';

export default function PanelRouter(): JSX.Element {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/report`} component={PanelReport} />
      <Route path={`${path}/blackList/add`} component={AddBlackList} />
      <Route path={`${path}/blackList`} component={ShowBlackList} />

      <Route path={`${path}/admin/add`} component={AddAdmin} />
      <Route path={`${path}/admin`} component={AdminList} />

      <Route path={`${path}/logout`} component={Logout} />

      <Route path={`${path}`}>
        <Redirect to={`${path}/report`} />
      </Route>
    </Switch>
  );
}
