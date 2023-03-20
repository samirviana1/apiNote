import Redis from "ioredis";
import {redisEnv} from "../../app/env/redis.env";

export class RedisConnection {
  private static _connection: Redis;

  public static async connect(): Promise<void> {
    if (!this._connection) {
      this._connection = new Redis({
        host: redisEnv.host,
        port: redisEnv.port,
        username: redisEnv.username,
        password: redisEnv.possword,
      });
    }
  }
}
