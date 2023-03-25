import {v4} from "uuid";
import {Task} from "../../../models";
import {TaskDTO} from "../dtos/createTask.dto";
import {TaskRepository} from "../repositories/task.repository";
import {CacheRepository} from "src/app/shared/database/repository/cache.repository";

export class CreateTaskUseCase {
  #repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.#repository = repository;
  }

  public async execute(dto: TaskDTO): Promise<Task> {
    //repository cache
    const cacheRepository = new CacheRepository();

    dto.uid = v4();
    const task = await this.#repository.create(dto);

    //getcacheMetod
    const noteCacheList = await cacheRepository.get("TASK_LIST");
    //metod push da task na list do cache
    noteCacheList.push(task);
    //set metodcache para setar task_list no cache
    await cacheRepository.set("TASK_LIST", noteCacheList);

    return task;
  }
}
