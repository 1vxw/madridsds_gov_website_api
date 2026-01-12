import Router from "Router";
import { GovController } from "./gov.controller.js";

const router: Router = new Router();
const controller: GovController = new GovController();

router.get("/key-officials", controller.keyOfficials);
router.get("/directory-of-barangays", controller.directoryOfBarangays);
router.get("/public-offices", controller.publicOffices);

export default router;