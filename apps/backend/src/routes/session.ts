import { Router } from "express";
import { sessions } from "../constrollers/sessionController.js";

const sessionRouter: Router = Router();

sessionRouter.post("/", sessions);

export default sessionRouter;
