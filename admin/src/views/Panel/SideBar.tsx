import { Layout, Menu } from 'antd';
import { UserOutlined, LineChartOutlined } from '@ant-design/icons';
import { NavLink, useLocation } from 'react-router-dom';
import { PANEL_REPORT_ROUTE } from '@shared/constants/routes';
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

        <SubMenu key="sub2" icon={<UserOutlined />} title={strings.panel.menu.ADMIN}>
          <Menu.Item key="1">{strings.panel.menu.ADD_ADMIN}</Menu.Item>
          <Menu.Item key="2">{strings.panel.menu.MANAGE_ADMINS}</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
