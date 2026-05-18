import fs from "fs";
const logger = (req, res, next) => {
    // console.log('Method - URL - Time:', req.method, req.url, Date.now())
    const log = `
    ========================================
    [${new Date().toISOString()}]
    Method : ${req.method}
    URL    : ${req.url}
    IP     : ${req.ip}
    ========================================
    `;
    fs.appendFile("logger.txt", log, (err) => {
        if (err) {
            console.error("Log write failed:", err);
        }
    });
    next();
};
export default logger;
//# sourceMappingURL=logger.js.map