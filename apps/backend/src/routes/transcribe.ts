import { Router } from "express";
import multer from "multer";
import { transcribe } from "../constrollers/transcribeController.js";
import path from "path";

const transcribeRouter: Router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueSuffix + ext);
    },
});

const upload = multer({ storage });

transcribeRouter.post("/", upload.single("audio"), transcribe);

export default transcribeRouter;