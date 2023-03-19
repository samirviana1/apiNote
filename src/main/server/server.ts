import {Response} from "express";
import {createServer} from "../config/server.config";
import "dotenv/config";

export const runServer = () => {
  const app = createServer();
  app.get("/", (_, res: Response) => {
    res.send("<h1>Api Vagas</h1>");
  });
  app.listen(process.env.PORT, () => {
    console.log(`🤘 - Servidor rodando na porta ${process.env.PORT}`);
  });
};
