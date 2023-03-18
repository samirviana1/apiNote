import {CriptoService} from "../../../shared/services/cripto.service";
import {UserRepository} from "../repositories/user.repository";
import * as jwt from "jsonwebtoken";
import {appEnv} from "../../../env/app.env";
import {LoginUserDTO} from "../dtos/loginUser.dto";
import {CustomError} from "../../../shared/utils/errors/custom.error";

export interface LoginResponceDto {
  sucess: boolean;
  message: string;
  uid?: string;
  token?: string;
}

export class LoginUseCase {
  constructor(private repository: UserRepository) {}

  public async execute(loginDto: LoginUserDTO): Promise<string> {
    const user = await this.repository.getUserByEmail(loginDto.email);

    if (!user) {
      throw new CustomError("E-mail ou senha incorreto(s)", 403);
    }

    const criptoService = new CriptoService();

    const matchPass = await criptoService.comparar({
      valor: loginDto.password,
      hash: loginDto.password,
    });

    if (!matchPass) {
      throw new CustomError("E-mail ou senha incorreto(s)", 403);
    }

    const token = jwt.sign(
      {
        uid: user.uid,
      },
      appEnv.secret!,
      {
        expiresIn: "1h",
      }
    );

    return token;
  }
}
