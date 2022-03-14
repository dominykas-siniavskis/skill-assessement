import { Request, Response } from "express";
import { Job } from "../models/job.model";
import jwt_decode from "jwt-decode";

const getAllJobs = async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(" ")[1];
    /*
    if (token) is used because the token might be undefined
    and jwt_decode requires a string for a token. Even though
    we ensure that an authorization header is passed in the
    authMiddleware.
    */
    if (token) {
        try {
            const user: Record<string, string> = jwt_decode(token);
            const jobs = await Job.find({ user_uuid: user.uuid });
            return res.status(200).send({ jobs });
        } catch (error) {
            let message = "Unknown error";
            /*
            instanceof used to be able to access error.message
            otherwise default message used.
            */
            if (error instanceof Error) message = error.message;
            return res.status(500).send({ message });
        }
    }
};

const getJobById = async (req: Request, res: Response) => {
    const _id = req.params.id;
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        try {
            const user: Record<string, string> = jwt_decode(token);
            const job = await Job.findOne({ _id, user_uuid: user.uuid });
            if (!job) {
                return res.status(404).send({ message: "Not found" });
            }
            return res.status(200).send(job);
        } catch (error) {
            let message = "Unknown error";
            if (error instanceof Error) message = error.message;
            return res.status(500).send({ message });
        }
    }
};

const createJob = async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(" ")[1];
    const { name, description } = req.body;
    if (token) {
        try {
            const user: Record<string, string> = jwt_decode(token);
            const job = new Job({ name, description, user_uuid: user.uuid });
            await job.save();
            return res.status(201).send(job);
        } catch (error) {
            let message = "Unknown error";
            if (error instanceof Error) message = error.message;
            return res.status(500).send({ message });
        }
    }
};

export default { getAllJobs, createJob, getJobById };
