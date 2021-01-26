import { Repository, EntityRepository } from "typeorm";
import Funcionarios from "../models/Funcionarios";

@EntityRepository(Funcionarios)
class RoleRepository extends Repository<Funcionarios> {}

export default RoleRepository;
