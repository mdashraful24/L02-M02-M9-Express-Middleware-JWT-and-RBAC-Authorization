import { authService } from "./auth.service";
import { sendResponse } from "../../utils/sendResponse";
const loginUser = async (req, res) => {
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
    }
    catch (error) {
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: error.message,
            error: error
        });
    }
};
const refreshToken = async (req, res) => {
    try {
        const result = await authService.generateRefreshToken(req.cookies.refreshToken);
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Access token generated!",
            data: result
        });
    }
    catch (error) {
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: error.message,
            error: error
        });
    }
};
export const authController = {
    loginUser,
    refreshToken,
};
//# sourceMappingURL=auth.controller.js.map