import express, { type Application, type Request, type Response } from "express";
import { userRoute } from "./modules/user/user.route";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";
import fs from "fs";
const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log('Method - URL - Time:', req.method, req.url, Date.now())

    const log = `
        ========================================
        [${new Date().toISOString()}]
        Method : ${req.method}
        URL    : ${req.url}
        IP     : ${req.ip}
        ========================================
        `

    fs.appendFile("logger.txt", log, (err) => {
        if (err) {
            console.error("Log write failed:", err)
        }
    })
    next()
})

app.get('/', (req: Request, res: Response) => {
    // res.send('Hello World!')

    res.status(200).json({
        success: true,
        message: "Express server",
        author: "Next Level"
    });
});

app.use("/api/users", userRoute);
app.use("/api/profile", profileRoute);
app.use("/api/auth", authRoute);

export default app;
