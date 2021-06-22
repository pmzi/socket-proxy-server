import { Layout, Menu } from 'antd';
import { UserOutlined, LineChartOutlined, CloseOutlined } from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom';
import {
  PANEL_ADD_ADMIN, PANEL_ADD_BLACK_LIST, PANEL_ADMIN_LIST, PANEL_REPORT_ROUTE, PANEL_SHOW_BLACK,
} from '@shared/constants/routes';
import strings from '@shared/constants/strings';

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function SideBar(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Sider width={200}>
      <Menu
        className="h-full"
        selectedKeys={[pathname]}
        mode="inline"
      >
        <Menu.Item
          key={PANEL_REPORT_ROUTE}
          icon={<LineChartOutlined />}>
          <NavLink to={PANEL_REPORT_ROUTE}>
            {strings.panel.menu.REPORT}
          </NavLink>
        </Menu.Item>

        <SubMenu key="sub1" icon={<CloseOutlined />} title={strings.panel.menu.BLACK_LIST}>
          <Menu.Item key={PANEL_ADD_BLACK_LIST}>
            <NavLink to={PANEL_ADD_BLACK_LIST}>
              {strings.panel.menu.ADD_BLACK_LIST}
            </NavLink>
          </Menu.Item>
          <Menu.Item key={PANEL_SHOW_BLACK}>
            <NavLink to={PANEL_SHOW_BLACK}>
              {strings.panel.menu.MANAGE_BLACK_LIST}
            </NavLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" icon={<UserOutlined />} title={strings.panel.menu.ADMIN}>
          <Menu.Item key={PANEL_ADD_ADMIN}>
            <NavLink to={PANEL_ADD_ADMIN}>
              {strings.panel.menu.ADD_ADMIN}
            </NavLink>
          </Menu.Item>
          <Menu.Item key={PANEL_ADMIN_LIST}>
            <NavLink to={PANEL_ADMIN_LIST}>
              {strings.panel.menu.MANAGE_ADMINS}
            </NavLink></Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
