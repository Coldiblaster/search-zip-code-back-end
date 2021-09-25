import { Request, Response } from 'express';
import cep from 'cep-promise';

export default class CepPromiseController {
  public async index(request: Request, response: Response): Promise<void> {
    const { cep_promise } = request.params;

    cep(cep_promise, { timeout: 2000 })
      .then((result: any) => {
        // retorno dos dados em caso de sucesso
        return response.json(result);
      })
      .catch((error: any) => {
        // retorno do erro caso exista
        return response.status(400).json(error);
      });
  }
}
