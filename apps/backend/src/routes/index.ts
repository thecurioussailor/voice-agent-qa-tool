import { Router } from "express";
import evaluateRouter from "./evaluate.js";
import sessionRouter from "./session.js";
import transcribeRouter from "./transcribe.js";
import authRouter from "./auth.js";
import metricsRouter from "./metrics.js";

const router: Router = Router();

router.use("/auth", authRouter);
router.use("/evaluate", evaluateRouter);
router.use("/transcribe", transcribeRouter);
router.use("/session", sessionRouter);
router.use("/metrics", metricsRouter);

export default router;