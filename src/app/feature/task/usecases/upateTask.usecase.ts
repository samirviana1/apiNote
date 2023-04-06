import {title} from "process";
import {Task} from "../../../models";
import {CustomError} from "../../../shared/utils/errors/custom.error";
import {TaskDTO} from "../dtos/createTask.dto";
import {TaskRepository} from "../repositories/task.repository";
import {CacheRepository} from "src/app/shared/database/repository/cache.repository";

export class UpdateTaskUsecase {
  #repository: TaskRepository;
  #cacheRepository: CacheRepository;
  constructor(repository: TaskRepository) {
    this.#cacheRepository = new CacheRepository();
    this.#repository = repository;
  }

  public async execute(dto: TaskDTO): Promise<Task | null> {
    const task = await this.#repository.getTask(dto.uid!);
    const taskCache = (await this.#cacheRepository.get("LIST_TASK_USER")) ?? [];
    if (!task) {
      return null;
    }
    dto.title = task.title;
    dto.description = task.description;
    const taskUpdate = await this.#repository.updateTask(
      task.title,
      task.description
    );
    if (!taskUpdate) {
      throw new CustomError("Erro sua anotação não foi encontrada!", 404);
    }
    return taskUpdate;
  }
}
