import mongoose from "mongoose";
import { dbConfig } from "../configs/dbConfig";

export const ConnectDb = () => {
    mongoose.connect(dbConfig.url, () => {
        console.log("Connected to the database");
    });
};
