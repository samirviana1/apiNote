import {TaskRepository} from "../repositories/task.repository";
import {TaskDTO} from "../dtos/createTask.dto";
import {Task} from "../../../models";
import {CustomError} from "../../../shared/utils/errors/custom.error";

export class DeleteTaskUserUsecase {
  #repository: TaskRepository;

  constructor(repository: TaskRepository) {
    this.#repository = repository;
  }

  public async execute(uid: any): Promise<void> {
    const deleteTaskUser = this.#repository.delTask(uid);
    if (!deleteTaskUser) {
      throw new CustomError("O sistema não encontrou a mensagem!", 404);
    }
    return deleteTaskUser;
  }
}
