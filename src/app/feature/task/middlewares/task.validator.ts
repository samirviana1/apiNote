import {NextFunction, Response, Request} from "express";
import {CustomError} from "../../../shared/utils/errors/custom.error";

export const taskValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {title, description} = req.body;
  if (!title) return CustomError.badRequest(res, "É necessario um nome!", 400);
  if (!description)
    return CustomError.badRequest(res, "É necessario um e-mail!", 400);
  next();
};
