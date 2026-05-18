import jwt, {} from "jsonwebtoken";
import { sendResponse } from "../utils/sendResponse";
import config from "../config";
import { pool } from "../db";
const auth = (...roles) => {
    return async (req, res, next) => {
        // console.log(roles)
        try {
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
            const decoded = jwt.verify(token, config.secret);
            const userData = await pool.query(`
            SELECT * FROM users WHERE email=$1
        `, [decoded.email]);
            const user = userData.rows[0];
            if (userData.rows.length === 0) {
                sendResponse(res, {
                    statusCode: 404,
                    success: false,
                    message: "User not found!",
                });
            }
            if (!user?.is_active) {
                sendResponse(res, {
                    statusCode: 403,
                    success: false,
                    message: "Forbidden!",
                });
            }
            if (roles.length && !roles.includes(user.role)) {
                sendResponse(res, {
                    statusCode: 403,
                    success: false,
                    message: "Forbidden!",
                });
            }
            req.user = decoded;
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
export default auth;
//# sourceMappingURL=auth.js.map