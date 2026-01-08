
import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
	res.json({
		status: "ok",
		time: new Date(),
		uptime: process.uptime(),
		env: process.env.NODE_ENV || "development"
	});
});

export default router;
