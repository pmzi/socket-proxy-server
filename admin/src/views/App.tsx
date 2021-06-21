import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import fa from 'antd/lib/locale/fa_IR';

import { AuthProvider } from '@auth';
import Router from './Router';

function App(): JSX.Element {
  return (
    <ConfigProvider locale={fa} direction="rtl">
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
