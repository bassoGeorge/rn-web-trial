import {EnvConfig} from './env-config';

export const ENVIRONMENT = process.env.NODE_ENV;

export const API_URL = EnvConfig.getApiUrl();
