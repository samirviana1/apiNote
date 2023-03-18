import {Request, Response} from "express";
import {CreateTaskUseCase} from "../usecases/createTask.usecase";
import {TaskRepository} from "../repositories/task.repository";
import {httpHelper} from "../../../shared/utils/httpHelper/http.helper";

export class TaskController {
  public static async createTask(req: Request, res: Response) {
    try {
      const {title, description, userUid} = req.body;
      const repository = new TaskRepository();
      const usecase = new CreateTaskUseCase(repository);
      const result = await usecase.execute({title, description, userUid});

      const response = httpHelper.sucesso(result);
      return res.status(response.code).json(response);
    } catch (error: any) {
      const response = httpHelper.buildErrorContent(error);
      return res.status(response.code).json(response);
    }
  }

  public static async getAllTask() {}

  public static async getAllUserTask() {}

  public static async updateTask() {}

  public static async deleteTask() {}
}
