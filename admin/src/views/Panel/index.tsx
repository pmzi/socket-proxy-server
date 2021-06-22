import { Layout } from 'antd';

import SideBar from './SideBar';
import PanelRouter from './PanelRouter';

const { Content } = Layout;

export default function Panel(): JSX.Element {
  return (
    <Layout className="min-h-screen">
      <SideBar />
      <Layout className="py-6 pr-6">
        <Content
          className="p-6 m-auto w-full"
          style={{
            maxWidth: '1060px',
          }}
        >
          <PanelRouter />
        </Content>
      </Layout>
    </Layout>
  );
}
