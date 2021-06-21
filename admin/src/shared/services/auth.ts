import storage from '@services/storage';
import { LOGIN_ROUTE, PANEL_ROUTE } from '@shared/constants/routes';

const TOKEN_KEY = 'token';

export default {
  PUBLIC_ROUTE: LOGIN_ROUTE,
  PRIVATE_ROUTE: PANEL_ROUTE,
  login(token: string): void {
    storage.write(TOKEN_KEY, token);
  },
  logout(): void {
    storage.remove(TOKEN_KEY);
  },
  checkLoginState(): boolean {
    return Boolean(storage.read(TOKEN_KEY));
  },
  setToken(token: string): void {
    storage.write(TOKEN_KEY, token);
  },
  getToken(): string | null {
    return storage.read(TOKEN_KEY);
  },
  removeToken(): void {
    storage.remove(TOKEN_KEY);
  },
};
