import { userService } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
const createUser = async (req, res) => {
    try {
        const result = await userService.createUserIntoDB(req.body);
        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "User created successfully!",
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
const getAllUsers = async (req, res) => {
    try {
        const result = await userService.getAllUsersFromDB();
        if (result.rows.length === 0) {
            sendResponse(res, {
                statusCode: 404,
                success: false,
                message: "Users not found!",
                data: {}
            });
        }
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Users retrieve successfully!",
            data: result.rows
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
const getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.getSingleUserFromDB(id);
        if (result.rows.length === 0) {
            sendResponse(res, {
                statusCode: 404,
                success: false,
                message: "User not found!",
                data: {}
            });
        }
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "User retrieve successfully!",
            data: result.rows[0]
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
const updateUser = async (req, res) => {
    const { id } = req.params;
    // const { name, password, age, is_active } = req.body;
    try {
        const result = await userService.updateUserInfoDB(req.body, id);
        if (result.rows.length === 0) {
            sendResponse(res, {
                statusCode: 404,
                success: false,
                message: "User not found!"
            });
        }
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Users updated successfully!",
            data: result.rows[0]
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
const deleteUser = async (req, res) => {
    const { email } = req.params;
    try {
        const result = await userService.deleteUserFromDB(email);
        if (result.rowCount === 0) {
            sendResponse(res, {
                statusCode: 404,
                success: false,
                message: "User not found!"
            });
        }
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Users deleted successfully!"
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
export const userController = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
};
//# sourceMappingURL=user.controller.js.map