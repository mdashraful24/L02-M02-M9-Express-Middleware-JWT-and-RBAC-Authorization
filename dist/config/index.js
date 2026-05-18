import path from "path";
import dotenv from "dotenv";
dotenv.config({
    path: path.join(process.cwd(), ".env")
});
const config = {
    connection_string: process.env.CONNECTIONSTRING,
    port: process.env.PORT,
    secret: process.env.JWT_SECRET,
    refresh_secret: process.env.REFRESH_TOKEN,
    access_token_valid: process.env.ACCESS_TOKEN_VALID || "1h"
};
export default config;
//# sourceMappingURL=index.js.map