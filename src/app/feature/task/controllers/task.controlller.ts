import {Request, Response, response} from "express";
import {CreateTaskUseCase} from "../usecases/createTask.usecase";
import {TaskRepository} from "../repositories/task.repository";
import {httpHelper} from "../../../shared/utils/httpHelper/http.helper";
import {GetAllTaskUserUsecase} from "../usecases/getUserTask.usecase";
import {UpdateTaskUsecase} from "../usecases/upateTask.usecase";
import {DeleteTaskUserUsecase} from "../usecases/deleteTask.usecase";

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

  public static async getAllUserTask(req: Request, res: Response) {
    try {
      const {userUid} = req.params;
      const repository = new TaskRepository();
      const usecase = new GetAllTaskUserUsecase(repository);
      const result = await usecase.execute({userUid});
      const response = httpHelper.sucesso(result);
      return res.status(response.code).json(response);
    } catch (error: any) {
      const response = httpHelper.buildErrorContent(error);
      return res.status(response.code).json(response);
    }
  }

  public static async updateTask(req: Request, res: Response) {
    try {
      const {uid, title, description} = req.body;
      const repository = new TaskRepository();
      const usecase = new UpdateTaskUsecase(repository);
      //const result = await usecase.execute({uid, title, description});
      //const response = httpHelper.sucesso(result);
      //return res.status(response.code).json(response);
    } catch (error: any) {
      const response = httpHelper.buildErrorContent(error);
      return res.status(response.code).json(response);
    }
  }

  public static async deleteTask(req: Request, res: Response) {
    try {
      const {uid} = req.params;
      const repository = new TaskRepository();
      const usecase = new DeleteTaskUserUsecase(repository);
      const result = await usecase.execute({uid});
      const response = httpHelper.sucesso(result);
      return res.status(response.code).json(response);
    } catch (error: any) {
      const response = httpHelper.buildErrorContent(error);
      return res.status(response.code).json(response);
    }
  }
}
