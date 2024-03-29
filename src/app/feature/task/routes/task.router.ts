import {Router, Request, Response} from "express";
import {taskValidator} from "../middlewares/task.validator";
import {authMiddleware} from "../../../shared/middlewares/auth.middleware";
import {TaskController} from "../controllers/task.controlller";
import {taskDadosUpdate} from "../middlewares/taskDadosUpdate";

export const taskRoutes = () => {
  const route = Router();

  route.post("/", (req: Request, res: Response) => {});
  route.post(
    "/taskCreate",
    [taskValidator, authMiddleware],
    TaskController.createTask
  );
  route.get(
    "/getTaskUsers/:userUid",
    [authMiddleware],
    TaskController.getAllUserTask
  );
  route.put(
    "updateTask",
    [authMiddleware, taskDadosUpdate],
    TaskController.updateTask
  );
  route.delete("deleteTask/:id", [authMiddleware], TaskController.deleteTask);
  return route;
};
