import { Router } from "express";
import { AuthController } from "./auth.controller.js";

const router: Router = Router();
const controller: AuthController = new AuthController();

router.post("/signin", controller.login);

export default router;