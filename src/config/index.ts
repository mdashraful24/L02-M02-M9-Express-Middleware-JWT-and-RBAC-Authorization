import path from "path";
import dotenv from "dotenv";

dotenv.config({
    path: path.join(process.cwd(), ".env")
});

const config = {
    connection_string: process.env.CONNECTIONSTRING as string,
    port: process.env.PORT,
    secret: process.env.JWT_SECRET as string,
    refresh_secret: process.env.REFRESH_TOKEN as string,
    access_token_valid: process.env.ACCESS_TOKEN_VALID as string
};

export default config;
