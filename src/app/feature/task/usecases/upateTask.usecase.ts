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

  public async execute(dto: TaskDTO): Promise<Task> {
    const taskUpdate = await this.#repository.updateTask(
      dto.uid!,
      dto.title,
      dto.description
    );
    if (!taskUpdate) {
      throw new CustomError("Erro sua anotação não foi encontrada!", 404);
    }
    return taskUpdate;
  }
}
