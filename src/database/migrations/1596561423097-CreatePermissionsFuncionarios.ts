import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreatePermissionsFuncionarios1596561423097 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "permissions_funcionarios",
        columns: [
          { name: "funcionario ", type: "varchar" },
          { name: "departamento", type: "varchar" },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "permissions_funcionarios",
      new TableForeignKey({
        columnNames: ["funcionario"],
        referencedColumnNames: ["id"],
        referencedTableName: "funcionario",
        name: "fk_permissions_funcionarios_",
        onDelete: "CASCADE",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "permissions_funcionarios",
      new TableForeignKey({
        columnNames: ["departamento"],
        referencedColumnNames: ["departamento"],
        referencedTableName: "departamento",
        name: "fk_permissions_departamento",
        onDelete: "CASCADE",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      "permissions_funcionarios",
      "fk_permissions_funcionarios"
    );
    await queryRunner.dropForeignKey(
      "permissions_funcionarios",
      "fk_permissions_departament_"
    );

    await queryRunner.dropTable("permissions_funcionarios");
  }
}
