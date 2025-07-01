import { Router } from 'express';
import { evaluate } from '../constrollers/evaluateController.js';

const evaluateRouter: Router = Router();

evaluateRouter.post("/", evaluate);            

export default evaluateRouter;