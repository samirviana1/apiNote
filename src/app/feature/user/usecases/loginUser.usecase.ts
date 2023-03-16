import {CriptoService} from "../../../shared/services/cripto.service";
import {UserRepository} from "../repositories/user.repository";
import * as jwt from "jsonwebtoken";
import {appEnv} from "../../../env/app.env";
import {LoginUserDTO} from "../dtos/loginUser.dto";

export interface LoginResponceDto {
  sucess: boolean;
  message: string;
  uid?: string;
  token?: string;
}

export class LoginUseCase {
  constructor(private repository: UserRepository) {}

  public async execute(date: LoginUserDTO): Promise<LoginResponceDto> {
    const user = await this.repository.getUserByEmail(date.uid);

    if (!user) {
      return {
        sucess: false,
        message: "Usuario não encontrado",
      };
    }

    const criptoService = new CriptoService();

    const matchPass = await criptoService.comparar(
      date.password,
      user.password
    );
    const matchEmail = await criptoService.comparar(date.email, user.email);

    if (!matchPass) {
      return {
        sucess: false,
        message: "Senha incorreta",
      };
    }

    if (!matchEmail) {
      return {
        sucess: false,
        message: "E-mail incorreto",
      };
    }

    const token = jwt.sign(
      {
        //uid: user.uid
      },
      appEnv.secret!,
      {
        expiresIn: "1h",
      }
    );
    return {
      sucess: true,
      message: "OK",
      token,
    };
  }
}
