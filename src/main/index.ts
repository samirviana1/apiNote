import {RedisConnection} from "./database/redis.connection";
import {DatabaseConnection} from "./database/typeorm.connection";
import {runServer} from "./server/server";

Promise.all([DatabaseConnection.connect(), RedisConnection.connect()]).then(
  runServer
);
