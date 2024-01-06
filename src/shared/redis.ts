import { createClient } from 'redis';
import logger from './logger';

let redisClient = createClient({
  url: 'redis://localhost:6379'
});

redisClient.on('error', (err) => logger.error('RedisError', err));
redisClient.on('connect', (err) => logger.info('RedisConnected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
