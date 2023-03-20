import {TaskRepository} from "../repositories/task.repository";
import {TaskDTO} from "../dtos/createTask.dto";
import {Task} from "../../../models";
import {CustomError} from "../../../shared/utils/errors/custom.error";

export class GetAllTaskUserUsecase {
  #repository: TaskRepository;
  constructor(repository: TaskRepository) {
    this.#repository = repository;
  }

  public async execute(userUid: any): Promise<Task[] | null> {
    const tasksUser = this.#repository.getAllTaskUser(userUid);
    if (!tasksUser) {
      throw new CustomError("Não há recados no seu sistema!", 404);
    }
    return tasksUser;
  }
}
