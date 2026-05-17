import type { Response } from "express";

type IResponse<T, E> = {
    statusCode: number;
    success: boolean;
    message?: string;
    data?: T;
    error?: E
}

export const sendResponse = <T, E>(res: Response, resData: IResponse<T, E>) => {
    res.status(resData.statusCode).json({
        success: resData.success,
        message: resData.message,
        data: resData.data,
        error: resData.error
    })
}