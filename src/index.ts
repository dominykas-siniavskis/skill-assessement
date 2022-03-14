import express from "express";
import cors from "cors";
import helmet from "helmet";

import { ConnectDb } from "./db/mongoose";
import { jobsRouter } from "./routes/job.router";
import { appConfig } from "./configs/appConfig";
import { JOBS_URI } from "./constants";
import { authMiddleware } from "./middlewares/auth.middleware";

if (!appConfig.port) {
    process.exit(1);
}

const PORT: number = appConfig.port;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(JOBS_URI, authMiddleware, jobsRouter);

ConnectDb();
app.listen(PORT, () => {
    console.log(`Service running on http://localhost:${PORT}`);
});
