import type { NextFunction, Request, Response } from "express";
import { sendResponse } from "../utils/sendResponse";

const auth = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        // console.log("This is protected route");
        // console.log(req.headers.authorization);

        const token = req.headers.authorization;

        if (!token) {
            sendResponse(res, {
                statusCode: 401,
                success: false,
                message: "Unauthorized access!",
            });
        }

        next();
    };
};

export default auth;