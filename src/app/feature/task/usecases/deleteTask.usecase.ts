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
    await this.#cacheRepository.del(`task${uid}`);
    const deleteTaskUser = await this.#repository.delTask(uid);
    return deleteTaskUser;
  }
}
