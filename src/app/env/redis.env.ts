import "dotenv/config";

export const redisEnv = {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  username: process.env.REDIS_USER,
  possword: process.env.REDIS_PASS,
};
