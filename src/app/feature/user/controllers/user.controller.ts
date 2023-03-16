import {Request, Response} from "express";
import {UserRepository} from "../repositories/user.repository";
import {CustomError} from "../../../shared/utils/errors/custom.error";
import {CreateUserUseCase} from "../usecases/createUser.usecase";
import {LoginUseCase} from "../usecases/loginUser.usecase";
import {httpHelper} from "../../../shared/utils/httpHelper/http.helper";

export class UserController {
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
    // erro 1 - já existe um usuário com esse e-mail // erro 2 - erro de banco
  }

  public async loginUserControll(req: Request, res: Response) {
    try {
      const useCase = new LoginUseCase(new UserRepository());
      const result = await useCase.execute(req.body);
      if (!result) {
        return CustomError.badRequest(
          res,
          "Usuario ou senha não encontrado",
          403
        );
      }
      return httpHelper.sucesso(res, result);
    } catch (error: any) {
      return CustomError.serverError(res, error.toString());
    }
  }
}
