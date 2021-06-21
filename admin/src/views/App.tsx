import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@auth';
import Router from './Router';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
