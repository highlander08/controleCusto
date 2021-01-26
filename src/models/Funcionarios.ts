import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import Permission from "./Permission";

@Entity("funcionarios")
class Funcionarios {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  departamento: string;

  @Column()
  salario: Number;

  

  @ManyToMany(() => Permission)
  @JoinTable({
    name: "permissions_funcionarios",
    joinColumns: [{ name: "funcionario" }],
    inverseJoinColumns: [{ name: "departamento" }],
  })
  permission: Permission[];
}

export default Funcionarios;
