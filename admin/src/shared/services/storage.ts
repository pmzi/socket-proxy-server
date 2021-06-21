export default {
  read(key: string): string | null {
    return localStorage.getItem(key);
  },
  readJSON<T>(key: string): T {
    const content = localStorage.getItem(key);
    return content ? JSON.parse(content) : null;
  },
  write(key: string, data: string): void {
    localStorage.setItem(key, data);
  },
  // eslint-disable-next-line max-len
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/no-explicit-any
  wroteJSON(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  },
  remove(key: string): void {
    localStorage.removeItem(key);
  },
};
