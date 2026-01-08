import { Router } from "express";
import aboutRoutes from "../modules/about/about.routes.js";
import healthRoutes from "./v1/health.js";

const router = Router();

// /api health check
router.use("/", healthRoutes);


// /api/v1/about : subroutes
router.use("/v1/about", aboutRoutes);

// /api/v1/about root
router.get("/v1/about", (_, res) => {
  res.json({ message: "About API root. Try /mission, /vision, etc." });
});

// /api/v1 root
router.get("/v1", (_, res) => {
  res.json({ message: "API v1 root. Try /about." });
});


router.use((req, res) => {
  res.status(404).json({ error: "Not found", path: req.originalUrl });
});

export default router;
