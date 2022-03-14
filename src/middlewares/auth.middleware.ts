/*
Mocked authentication middleware as I thought
implementing JWT authentication would get a bit out of scope with
creation of routes for registering, authenticating, refreshing and etc.
*/
import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        try {
        /*
        This would be the part where we check if the
        token is valid with jsonwebtoken or other. 
        */
            next();
        } catch (error) {
            // Here we would handle invalid token case.
        }
    } else {
        return res.status(401).send({ message: "Unauthorized" });
    }
};
