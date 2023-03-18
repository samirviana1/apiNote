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

  public static async create(
    req: Request,
    res: Response
  ): Promise<Record<string, any>> {
    try {
      const {uid, name, email, password} = req.body;

      const userDto = {
        uid,
        name,
        email,
        password,
      };

      const repository = new UserRepository();
      const usecase = new CreateUserUseCase(repository);

      await usecase.execute(userDto);

      return res.status(201).json({
        success: true,
        message: "Usuário criado com sucesso!",
      });
    } catch (error: any) {
      const errorContent = httpHelper.buildErrorContent(error);

      return res.status(errorContent.code).json(errorContent);
    }
  }

  public static async loginUserControll(
    req: Request,
    res: Response
  ): Promise<Record<string, any>> {
    try {
      const {email, password} = req.body;

      const useCase = new LoginUseCase(new UserRepository());
      const result = await useCase.execute({email, password});

      const response = httpHelper.sucesso(result);

      return res.status(response.code).json(response);
    } catch (error: any) {
      const errorContent = httpHelper.buildErrorContent(error);

      return res.status(errorContent.code).json(errorContent);
    }
  }
}
