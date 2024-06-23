import { ENVS } from '../util/constant';
import { ConfigEnv } from '../config/config-env';

const env = new ConfigEnv().config;
export const IS_PROD = env.environment.toLowerCase() === ENVS.prod.toLowerCase();