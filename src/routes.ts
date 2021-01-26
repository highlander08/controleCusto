import { Router } from "express";
import PermissionController from "./controllers/PermissionController";
import FuncionarioController from "./controllers/FuncionarioController";

const router = Router();

router.post("/funcionarios", FuncionarioController.create);
router.post("/permissions", PermissionController.create);



export { router };
