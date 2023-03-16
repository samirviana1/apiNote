import * as bcrypt from "bcrypt-ts";

export class CriptoService {
  public async criptografa(valor: string): Promise<string> {
    return await bcrypt.hash(valor, 10);
  }

  public async comparar(valorP: string, valorS: string): Promise<boolean> {
    return await bcrypt.compare(valorP, valorS);
  }
}
