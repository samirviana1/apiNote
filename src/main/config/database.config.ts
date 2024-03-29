import {DataSource} from "typeorm";
import "dotenv/config";
import {appEnv} from "../../app/env/app.env";
import {CreateTableUsers1677785802931} from "../../app/shared/database/migrations/1677785802931-CreateTableUsers";
import {CreateTableTasks1677785941823} from "../../app/shared/database/migrations/1677785941823-CreateTableTasks";
import {
  DefaultEntity,
  TaskEntity,
  UserEntity,
} from "../../app/shared/database/entities";

export default new DataSource({
  type: "postgres",
  url: appEnv.dbUrl,
  schema: "public",
  synchronize: false,
  logging: false,
  entities: [DefaultEntity, TaskEntity, UserEntity],
  migrations: [CreateTableUsers1677785802931, CreateTableTasks1677785941823],
  ssl: {
    rejectUnauthorized: false,
  },
});
