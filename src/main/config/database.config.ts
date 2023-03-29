import {DataSource} from "typeorm";
import "dotenv/config";
import {CreateTableUsers1677785802931} from "src/app/shared/database/migrations/1677785802931-CreateTableUsers";
import {CreateTableTasks1677785941823} from "src/app/shared/database/migrations/1677785941823-CreateTableTasks";
import {
  DefaultEntity,
  TaskEntity,
  UserEntity,
} from "src/app/shared/database/entities";

export default new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  entities: [DefaultEntity, TaskEntity, UserEntity],
  migrations: [CreateTableUsers1677785802931, CreateTableTasks1677785941823],
});
