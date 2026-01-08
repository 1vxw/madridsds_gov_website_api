// about.routes.ts
import { Router } from "express";
import { AboutController } from "./about.controller.js";

const router: Router = Router();
const controller: AboutController = new AboutController();

router.get("/mission", controller.mission);
router.get("/vision", controller.vision);
router.get("/mandate", controller.mandate);
router.get("/history", controller.history);
router.get("/org-chart", controller.orgChart);
router.get("/contacts", controller.contacts);

export default router;
