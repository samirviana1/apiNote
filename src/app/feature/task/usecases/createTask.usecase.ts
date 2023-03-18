import {v4} from "uuid";
import {Task} from "../../../models";
import {TaskDTO} from "../dtos/createTask.dto";
import {TaskRepository} from "../repositories/task.repository";

export class CreateTaskUseCase {
  #repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.#repository = repository;
  }

  public async execute(dto: TaskDTO): Promise<Task> {
    dto.uid = v4();

    const task = await this.#repository.create(dto);

    return task;
  }
}
