import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    res.status(400).json({
        success: false, // It should probably be `false` if it's an error.
        message: "some error",
    });
};
