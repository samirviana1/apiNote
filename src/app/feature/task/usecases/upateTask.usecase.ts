import {title} from "process";
import {Task} from "../../../models";
import {CustomError} from "../../../shared/utils/errors/custom.error";
import {TaskDTO} from "../dtos/createTask.dto";
import {TaskRepository} from "../repositories/task.repository";

export class UpdateTaskUsecase {
  #repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.#repository = repository;
  }

  public async execute(dto: TaskDTO): Promise<Task | null> {
    const task = await this.#repository.getTask(dto.uid!);
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
