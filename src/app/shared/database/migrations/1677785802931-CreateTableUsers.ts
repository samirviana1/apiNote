import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableUsers1677785802931 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {name: "uid", type: "uuid", isNullable: false, isPrimary: true},
          {name: "name", type: "varchar", length: "30", isNullable: false},
          {
            name: "email",
            type: "varchar",
            length: "75",
            isNullable: false,
            isUnique: true,
          },
          {name: "password", type: "varchar", length: "100", isNullable: false},
          {name: "created_at", type: "timestamp"},
          {name: "updated_at", type: "timestamp"},
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
