import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PanelReport from './PanelReport';

export default function PanelRouter(): JSX.Element {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/report`} component={PanelReport} />
      {/* <Route path="/panel/addAdmin" /> */}
      {/* <Route path="/panel/manageAdmins" /> */}
    </Switch>
  );
}
