import {TaskRepository} from "../repositories/task.repository";
import {TaskDTO} from "../dtos/createTask.dto";
import {Task} from "../../../models";
import {CustomError} from "../../../shared/utils/errors/custom.error";

// export class GetUserTaskUsecase {
//   #repository: TaskRepository;

//   constructor(repository: TaskRepository) {
//     this.#repository = repository;
//   }

// public async execute(dto: TaskDTO): Promise<Task> {
//   const taskIdUser = this.#repository.getTask(dto.userUid);
//   if (!taskIdUser) {
//     throw new CustomError("erro", 404);
//   }
//   return taskIdUser;
// }
//}
