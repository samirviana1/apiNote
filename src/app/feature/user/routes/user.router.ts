import {Router, Request, Response} from "express";

const route = Router();

route.post("/", (req: Request, res: Response) => {
  // Cria usuário
});

export {route as userRoutes};
