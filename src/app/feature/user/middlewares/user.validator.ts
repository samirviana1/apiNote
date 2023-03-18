import {NextFunction, Request, Response} from "express";
import {CustomError} from "../../../shared/utils/errors/custom.error";

export const UserValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {name, email, password} = req.body;
  if (!name) return CustomError.badRequest(res, "É necessario um nome!", 400);
  if (!email)
    return CustomError.badRequest(res, "É necessario um e-mail!", 400);
  if (!password)
    return CustomError.badRequest(res, "É necessario um password!", 400);

  next();
};
