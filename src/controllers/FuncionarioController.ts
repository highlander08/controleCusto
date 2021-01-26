import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import FuncionarioRepository from "../repositories/FuncionarioRepository";
import PermissionRepository from "../repositories/PermissionRepository";

class FuncionarioController {
  async create(request: Request, response: Response) {
    const funcionarioRepository = getCustomRepository(FuncionarioRepository);
    const permissionRepository = getCustomRepository(PermissionRepository);

    const { name, departamento, salario , permissions } = request.body;

    const existFuncionario = await funcionarioRepository.findOne({ name });

    if (existFuncionario) {
      return response.status(400).json({ err: "Funcionario already exists!" });
    }

    const existsPermissions = await permissionRepository.findOne(permissions);

    const funcionario = funcionarioRepository.create({
      name,
      departamento,
      salario,
      permission: existsPermissions,
    });

    await funcionarioRepository.save(funcionario);

    return response.json(funcionario);
  }
}

export default new FuncionarioController();
