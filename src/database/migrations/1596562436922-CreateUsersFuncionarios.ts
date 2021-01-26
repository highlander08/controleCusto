import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateUsersFuncionarios1596562436922 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_funcionarios",
        columns: [
          { name: "funcionario_id", type: "uuid" },
          { name: "user_id", type: "uuid" },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "users_funcionario",
      new TableForeignKey({
        columnNames: ["funcionario_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "funcionarios",
        name: "fk_funcionarios_user",
        onDelete: "CASCADE",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "users_funcionarios",
      new TableForeignKey({
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        name: "fk_users_funcionarios",
        onDelete: "CASCADE",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("users_funcionarios", "fk_funcionarios_user");
    await queryRunner.dropForeignKey("users_funcionarios", "fk_users_funcionarios");

    await queryRunner.dropTable("users_funcionarios");
  }
}
