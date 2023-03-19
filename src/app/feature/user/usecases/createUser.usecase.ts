import {CustomError} from "../../../shared/utils/errors/custom.error";
import {CreateUserDTO} from "../dtos/createUser.dto";
import {UserRepository} from "../repositories/user.repository";

export class CreateUserUseCase {
  #repository: UserRepository;

  constructor(repository: UserRepository) {
    this.#repository = repository;
  }

  public async execute(dto: CreateUserDTO): Promise<boolean> {
    const existUser = await this.#repository.getUserByEmail(dto.email);

    if (existUser) {
      throw new CustomError("E-mail já existe!", 400);
    }

    await this.#repository.create(dto);

    return true;
  }
}

// tentar buscar usuário no banco
