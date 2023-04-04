import {DatabaseConnection} from "../../../../main/database/typeorm.connection";
import {Task} from "../../../models";
import {TaskEntity} from "../../../shared/database/entities";
import {TaskDTO} from "../dtos/createTask.dto";

export class TaskRepository {
  private _repository = DatabaseConnection.connection.getRepository(TaskEntity);

  private mapToModel(entity: TaskEntity): Task {
    return Task.create(
      entity.uid,
      entity.userUid,
      entity.title,
      entity.description
    );
  }

  public async create(task: TaskDTO): Promise<Task> {
    const taskEntity = this._repository.create({
      uid: task.uid,
      title: task.title,
      description: task.description,
      userUid: task.userUid,
    });
    const result = await this._repository.save(taskEntity);

    return this.mapToModel(result);
  }

  public async getAllTask() {
    const result = await this._repository.find();
    return result;
  }

  public async getAllTaskUser(userUid: string): Promise<Task[] | null> {
    const result = await this._repository.find({where: {userUid}});
    return result;
  }

  public async getTask(uid: string): Promise<Task | null> {
    const result = await this._repository.findOne({where: {uid}});
    return result;
  }

  public async updateTask(
    title: string,
    description: string,
    uid?: string
  ): Promise<Task | undefined> {
    const task = await this._repository.findOne({where: {uid}});
    if (!task) {
      return undefined;
    }
    task.title = title;
    task.description = description;
    const result = await this._repository.save(task);
    return this.mapToModel(result);
  }

  public async delTask(uid: string): Promise<void> {
    const task = await this._repository.findOne({where: {uid}});
    const result = await this._repository.delete(uid);
  }
}
