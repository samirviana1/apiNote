import {Response} from "express";
export class CustomError extends Error {
  constructor(public message: string) {
    super(message);
  }

  public static serverError(res: Response, message?: string, code?: number) {
    return res.status(code ?? 500).send({
      ok: false,
      message,
    });
  }

  public static badRequest(res: Response, message?: string, code?: number) {
    return res.status(code ?? 400).send({
      ok: false,
      message,
    });
  }

  public static unauthorized(res: Response, message?: string, code?: number) {
    return res.status(code ?? 401).send({
      ok: false,
      message,
    });
  }
}
