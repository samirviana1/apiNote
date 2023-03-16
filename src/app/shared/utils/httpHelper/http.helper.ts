import {Response} from "express";

export class httpHelper {
  public static sucesso(
    res: Response,
    data: any,
    message?: string,
    code?: number
  ) {
    return res.status(code ?? 200).send({
      ok: true,
      data,
      message,
    });
  }
}
