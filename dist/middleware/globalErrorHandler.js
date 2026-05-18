import { sendResponse } from "../utils/sendResponse";
const globalErrorHandler = (err, req, res, next) => {
    // console.error(err.stack);
    sendResponse(res, {
        statusCode: 500,
        success: false,
        message: err.message || "Internal Server Error",
    });
};
export default globalErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map