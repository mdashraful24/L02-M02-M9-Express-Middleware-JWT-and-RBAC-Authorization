import type { Request, Response } from "express"
import { authService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";

const loginUser = async (req: Request, res: Response) => {
    try {

        const result = await authService.loginUserIntoDB(req.body);

        const { refreshToken } = result;

        res.cookie("refreshToken", refreshToken, {
            secure: false,
            httpOnly: true,
            sameSite: "lax"
        });

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "User login successfully!",
            data: result
        });
    } catch (error: any) {
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: error.message,
            error: error
        });
    }
}


export const authController = {
    loginUser
}