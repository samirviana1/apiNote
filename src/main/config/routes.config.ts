import {Express, Request, Response} from "express";
import {loginRoute, userRoutes} from "../../app/feature/user/routes";
import {taskRoutes} from "src/app/feature/task/routes/task.router";

export const makeRoutes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({
      success: true,
      message: "Healthy API",
    });
  });

  app.use("/users", userRoutes);
  app.use("/login", loginRoute);
  app.use("task", taskRoutes);
};
