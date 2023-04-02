import {Response} from "express";
import {createServer} from "../config/server.config";
import "dotenv/config";
import {makeRoutes} from "../config/routes.config";
import {appEnv} from "../../app/env/app.env";

export const runServer = () => {
  const app = createServer();

  makeRoutes(app);

  app.listen(appEnv.port, () => {
    console.log(`🤘 - Servidor rodando na porta ${appEnv.port}`);
  });
};
