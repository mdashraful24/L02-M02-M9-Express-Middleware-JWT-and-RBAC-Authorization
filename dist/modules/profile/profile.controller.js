import { profileService } from "./profile.service";
import { sendResponse } from "../../utils/sendResponse";
const createProfile = async (req, res) => {
    try {
        const result = await profileService.createProfileIntoDB(req.body);
        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "Profile created successfully!",
            data: result.rows[0],
        });
    }
    catch (error) {
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: error.message,
            error: error,
        });
    }
};
export const profileController = {
    createProfile,
};
//# sourceMappingURL=profile.controller.js.map