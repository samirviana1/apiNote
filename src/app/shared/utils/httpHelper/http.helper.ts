import {CustomError} from "../errors/custom.error";

export type ResponseContent = {
  ok: boolean;
  code: number;
  data?: any;
  message?: string;
};

export class httpHelper {
  public static sucesso(
    data: any,
    message?: string,
    code?: number
  ): ResponseContent {
    return {
      ok: true,
      data,
      code: code ?? 200,
      message,
    };
  }

  public static buildErrorContent(error: any): ResponseContent {
    if (error instanceof CustomError) {
      return {
        ok: false,
        code: error.code,
        message: error.message,
      };
    }

    return {
      ok: false,
      code: 500,
      message:
        "Erro insterno! Tente novamente, ou entre em contato com nosso time.",
    };
  }
}
