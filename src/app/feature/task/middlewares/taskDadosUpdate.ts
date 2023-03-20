import {NextFunction, Response, Request} from "express";
import {CustomError} from "../../../shared/utils/errors/custom.error";

export const taskDadosUpdate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {uid, title, description, userUid} = req.body;
  if (typeof uid != "string") {
    return CustomError.badRequest(res, "Dados incorretos!", 400);
  }
  if (typeof title != "string") {
    return CustomError.badRequest(res, "Dados incorretos!", 400);
  }
  if (typeof description != "string") {
    return CustomError.badRequest(res, "Dados incorretos!", 400);
  }
  if (typeof userUid != "string") {
    return CustomError.badRequest(res, "Dados incorretos!", 400);
  }
  next();
};
