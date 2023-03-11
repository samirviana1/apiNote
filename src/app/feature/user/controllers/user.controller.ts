import {Request, Response} from "express";
import {UserRepository} from "../repositories/user.repository";
import {CustomError} from "../../../shared/utils/errors/custom.error";
import {CreateUserUseCase} from "../usecases/createUser.usecase";

class UserController {
  // repository: UserRepository;

  // constructor(repository: UserRepository) {
  //   this.repository = repository;
  // }

  public async create(req: Request, res: Response) {
    try {
      const {name, email, password} = req.body;

      const userDto = {
        name,
        email,
        password,
      };

      const repository = new UserRepository();
      const usecase = new CreateUserUseCase(repository);

      const response = await usecase.execute(userDto);

      return res.status(201).json({
        success: true,
        message: "Usuário criado com sucesso!",
      });
    } catch (error: any) {
      if (error instanceof CustomError) {
        return res.status(500).json({
          success: false,
          message: error.message,
        });
      }

      return res.status(500).json({
        success: false,
        message:
          "Erro interno. Por favor tente novamente ou entre em contato com nosso time.",
      });
    }

    // criar
    // erro 1 - já existe um usuário com esse e-mail
    // erro 2 - erro de banco
  }
}
