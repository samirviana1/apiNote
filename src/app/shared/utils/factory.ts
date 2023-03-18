import {Request, Response} from "express";

export const adaptRoute = (controller: Controller) => {
  return (req: Request, res: Response) => {
    const request: CustomRequest = {
      body: req.body,
      params: req.params,
      headers: req.headers,
      query: req.query,
    };

    const controllerResponse = controller.execute(request);

    return res
      .status(controllerResponse.statusCode)
      .json(controllerResponse.body);
  };
};

export interface Controller {
  execute(req: CustomRequest): CustomResponse;
}

export type CustomResponse = {
  statusCode: number;
  body: any;
};

export type CustomRequest = {
  body?: any;
  params?: any;
  headers?: any;
  query?: any;
};
