// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as dotenv from 'dotenv';
dotenv.config();

const getEnv = (name: string, defaultValue: string) => {
  return process.env?.[name] || defaultValue;
};

export const appConfig: { host: string; port: string } = {
  host: getEnv('HOST', '0.0.0.0'),
  port: getEnv('PORT', '3712'),
};

export const swaggerAuthConfig: { username: string; password: string } = {
  username: getEnv('SWAGGER_USERNAME', 'user'),
  password: getEnv('SWAGGER_PASSWORD', 'password'),
};
