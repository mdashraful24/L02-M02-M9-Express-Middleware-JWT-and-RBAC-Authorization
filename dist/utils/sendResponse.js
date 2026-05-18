export const sendResponse = (res, resData) => {
    res.status(resData.statusCode).json({
        success: resData.success,
        message: resData.message,
        data: resData.data,
        error: resData.error,
        author: resData.author,
    });
};
//# sourceMappingURL=sendResponse.js.map