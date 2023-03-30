import * as bcrypt from "bcrypt";

type CompararDTO = {
  valor: string;
  hash: string;
};

export class CriptoService {
  public async criptografa(valor: string): Promise<string> {
    return await bcrypt.hash(valor, 10);
  }

  public async comparar(dto: CompararDTO): Promise<boolean> {
    return await bcrypt.compare(dto.valor, dto.hash);
  }
}
