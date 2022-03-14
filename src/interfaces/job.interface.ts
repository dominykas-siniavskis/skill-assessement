import { Document } from "mongoose";

export interface IJob extends Document {
    name: string;
    description: string;
    status: boolean;
}
