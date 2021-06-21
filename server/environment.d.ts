declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_NAME: string;
      DB_HOST: string;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_PORT: string;
      ENCRYPTION_SALT: string;
      JWT_SECRET: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
