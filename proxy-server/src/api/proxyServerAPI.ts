import http from '../services/http';

export default {
  async checkRequest({ target, port }: { target: string; port: number; }): Promise<boolean> {
    const { data: isBlocked } = await http.get<boolean>(`/proxy/checkRequest?target=${target}:${port}`);

    return isBlocked;
  },
  async addRequest({
    target, port, isBlocked, length,
  }: { target: string; port: number; length?: number; isBlocked: boolean; }): Promise<void> {
    await http.post('/proxy/addRequest', {
      target: `${target}:${port}`,
      length,
      isBlocked,
    });
  },
};
