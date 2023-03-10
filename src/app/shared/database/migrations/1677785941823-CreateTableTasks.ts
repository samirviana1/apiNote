import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableTasks1677785941823 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "tasks",

        columns: [
          {name: "uid", type: "uuid", isNullable: false, isPrimary: true},
          {name: "title", type: "varchar", length: "100", isNullable: false},
          {name: "description", type: "text", isNullable: false},
          {name: "user_id", type: "uuid", isNullable: false},
          {name: "created_at", type: "timestamp"},
          {name: "updated_at", type: "timestamp"},
        ],
        foreignKeys: [
          {
            name: "tasks_user_fk",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["uid"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tasks", true, true, true);
  }
}
