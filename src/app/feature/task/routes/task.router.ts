import {Router, Request, Response} from "express";

export const taskRoutes = () => {
  const route = Router();

  route.post("/", (req: Request, res: Response) => {});

  return route;
};
