import {Request, Response, NextFunction} from "express";
import * as jwt from "jsonwebtoken";
import {appEnv} from "../../env/app.env";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({
      ok: false,
      code: 401,
      message: "Faça o login para continuar",
    });
  }

  try {
    const data = jwt.verify(token, appEnv.secret) as any;
    const {userUid} = data;

    req.body.userUid = userUid;
    next();
  } catch (error: any) {
    return res.status(401).json({
      ok: false,
      code: 401,
      message: "Faça o login para continuar",
    });
  }
};
