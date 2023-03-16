import {DatabaseConnection} from "../../../../main/database/typeorm.connection";
import {User} from "../../../models";
import {UserEntity} from "../../../shared/database/entities";

export class LoginRepository {
  private _repository = DatabaseConnection.connection.getRepository(UserEntity);

  public async checkLogin(email: string, password: string) {
    const user = await this._repository.findOneBy({
      email,
      password,
    });
    if (!user) {
      return null;
    }
    return this.mapEntityToModel(user);
  }

  private mapEntityToModel(entity: UserEntity) {
    return User.create(entity.name, entity.email, entity.password);
  }
}
