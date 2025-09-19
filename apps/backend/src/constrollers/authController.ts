import { Request, Response } from "express";
import { prisma } from "@repo/db/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const registerUser = async (req: Request, res: Response) => {
    const { email, name, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { email, name, password: hashedPassword },
        });

        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET!);
        res.json({ 
            status: "success",
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            }, 
            token 
        });
    } catch (error) {
        res.status(500).json({ 
            status: "error",
            error: "Failed to register user",
            details: error
        });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    
    const { email, password } = req.body;
    
    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }

        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET!);

        res.json({ 
            status: "success",
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            }, 
            token 
        });

    } catch (error) {
        res.status(500).json({ 
            status: "error",
            error: "Failed to login user",
            details: error
        });
    }
};