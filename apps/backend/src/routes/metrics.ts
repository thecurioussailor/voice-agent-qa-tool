import { Router } from "express";

const metricsRouter: Router = Router();

metricsRouter.post("/", (req, res) => {
  res.json({ message: "metrics" });
});

export default metricsRouter;