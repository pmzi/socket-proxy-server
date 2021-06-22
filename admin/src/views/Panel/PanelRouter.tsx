import {
  Switch, Route, useRouteMatch, Redirect,
} from 'react-router-dom';
import AddBlackList from './blackList/AddBlackList';
import ShowBlackList from './blackList/ShowBlackList';
import PanelReport from './PanelReport';

export default function PanelRouter(): JSX.Element {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/report`} component={PanelReport} />
      <Route path={`${path}/blackList/add`} component={AddBlackList} />
      <Route path={`${path}/blackList/`} component={ShowBlackList} />

      <Route path={`${path}`}>
        <Redirect to={`${path}/report`} />
      </Route>
    </Switch>
  );
}
