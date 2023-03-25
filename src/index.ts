import {RedisConnection} from "./main/database/redis.connection";
import {DatabaseConnection} from "./main/database/typeorm.connection";
import {runServer} from "./main/server/server";

Promise.all([DatabaseConnection.connect(), RedisConnection.connect()])
  .then(runServer)
  .catch((error: any) => {
    console.log("Erro ao iniciar");
    console.log(error);
  });
