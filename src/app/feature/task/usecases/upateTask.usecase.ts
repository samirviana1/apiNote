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
    const tesk = await this.#repository.getTask(dto.uid!);
    if (!tesk) {
      throw new CustomError("erro", 404);
    }
    const result = await this.#repository.updateTask(
      tesk.title,
      tesk.description,
      tesk.uid
    );

    if (!result) {
      throw new CustomError("erro", 404);
    }
    return result;
  }
}
