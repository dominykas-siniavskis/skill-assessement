import express from "express";
import JobController from "../controllers/job.controller";

export const jobsRouter = express.Router();

jobsRouter.get("/", JobController.getAllJobs);
jobsRouter.get("/:id", JobController.getJobById);
jobsRouter.post("/", JobController.createJob);
