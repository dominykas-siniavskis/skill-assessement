import mongoose, { Schema } from "mongoose";
import { IJob } from "../interfaces/job.interface";

const JobSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
            default: null,
        },
        active: {
            type: Boolean,
            required: true,
            default: true,
        },
        user_uuid: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Job = mongoose.model<IJob>("Job", JobSchema);
