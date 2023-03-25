import {TaskRepository} from "../repositories/task.repository";
import {TaskDTO} from "../dtos/createTask.dto";
import {Task} from "../../../models";
import {CustomError} from "../../../shared/utils/errors/custom.error";
import {CacheRepository} from "src/app/shared/database/repository/cache.repository";

export class GetAllTaskUserUsecase {
  #repository: TaskRepository;
  constructor(repository: TaskRepository) {
    this.#repository = repository;
  }

  public async execute(userUid: any): Promise<Task[] | null> {
    const cacheRepository = new CacheRepository();
    cacheRepository.del("LIST_TASK_USER");
    const tasksUser = this.#repository.getAllTaskUser(userUid);
    if (!tasksUser) {
      throw new CustomError("Não há recados no seu sistema!", 404);
    }
    const taskList = (await cacheRepository.get("LIST_TASK_USER")) ?? [];
    await cacheRepository.set("LIST_TASK_USER", taskList);
    return tasksUser;
  }
}
