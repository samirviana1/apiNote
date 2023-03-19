import {TaskRepository} from "../repositories/task.repository";
import {TaskDTO} from "../dtos/createTask.dto";
import {Task} from "../../../models";
import {CustomError} from "../../../shared/utils/errors/custom.error";

// export class DeleteTaskUserUsecase {
//   #repository: TaskRepository;

//   constructor(repository: TaskRepository) {
//     this.#repository = repository;
//   }

//   // public async execute(dto: TaskDTO): Promise<Task> {
//   //   const result = this.#repository.delTask(dto.uid!);
//   //   if (!result) {
//   //     throw new CustomError("erro", 404);
//   //   }
//   //   return result;
//   // }
// }
