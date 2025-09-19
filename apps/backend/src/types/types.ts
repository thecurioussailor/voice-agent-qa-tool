declare global {
    namespace Express {
        interface Request {
            file?: Multer.File;
        }
    }
}

declare global {
    namespace Express {
        interface Request {
            user?: {
                userId: string;
                email: string;
            };
        }
    }
}