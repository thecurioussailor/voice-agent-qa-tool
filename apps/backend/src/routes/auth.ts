import { Router } from "express";
import { registerUser, loginUser } from "../constrollers/authController.js";

const authRouter: Router = Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);


export default authRouter;