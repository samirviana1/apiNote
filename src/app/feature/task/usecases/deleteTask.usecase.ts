import {TaskRepository} from "../repositories/task.repository";
import {TaskDTO} from "../dtos/createTask.dto";
import {Task} from "../../../models";
import {CustomError} from "../../../shared/utils/errors/custom.error";
import {CacheRepository} from "src/app/shared/database/repository/cache.repository";

export class DeleteTaskUserUsecase {
  #repository: TaskRepository;
  #cacheRepository: CacheRepository;

  constructor(repository: TaskRepository) {
    this.#repository = repository;
    this.#cacheRepository = new CacheRepository();
  }

  public async execute(uid: string): Promise<void> {
    const taskList = (await this.#cacheRepository.get("TASK_LIST")) ?? [];
    //const deleteTask = taskList.filter((task) => task.uid === uid);
    //await this.#cacheRepository.set("TASK_LIST", deleteTask);
    const deleteTaskUser = await this.#repository.delTask(uid);
    return deleteTaskUser;
  }
}
