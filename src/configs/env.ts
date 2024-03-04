import dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

const nodeEnv = process.env.NODE_ENV || 'development';

type EnvConfig = {
  nodeEnv: 'development' | 'test' | 'production';
  port: string;
  logs: 'common' | 'dev';
  domain: string;
  productsUrl: string;
  userUrl: string;
  sessionSecret: string;
};

export default {
  nodeEnv,
  port: process.env.PORT || '8080',
  logs: 'dev',
  domain: `${process.env.DOMAIN}${process.env.PORT}`,
  productsUrl: process.env.PRODUCTS_URL,
  userUrl: process.env.USER_URL,
  sessionSecret: process.env.SESSION_SECRET,
} as EnvConfig;
