import {DatabaseConnection} from "../../../../main/database/typeorm.connection";
import {User} from "../../../models/user.model";
import {UserEntity} from "../../../shared/database/entities";
import {CreateUserDTO} from "../dtos/createUser.dto";
import {v4} from "uuid";
export class UserRepository {
  private _repository = DatabaseConnection.connection.getRepository(UserEntity);

  private mapToModel(entity: UserEntity): User {
    return User.create(entity.uid, entity.name, entity.email, entity.password);
  }

  public async create(user: CreateUserDTO): Promise<User> {
    const userEntity = this._repository.create({
      uid: user.uid,
      name: user.name,
      email: user.email,
      password: user.password,
    });

    const result = await this._repository.save(userEntity);

    return this.mapToModel(result);
  }

  public async getUserByEmail(email: string): Promise<User | null> {
    const user = await this._repository.findOne({where: {email}});
    return user;
  }
}
