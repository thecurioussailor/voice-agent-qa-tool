import { Router } from "express";
import evaluateRouter from "./evaluate.js";
import sessionRouter from "./session.js";
import transcribeRouter from "./transcribe.js";

const router: Router = Router();

router.use("/evaluate", evaluateRouter);
router.use("/transcribe", transcribeRouter);
router.use("/session", sessionRouter);

export default router;