import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateAddressService from '../../../services/CreateAddressService';
import ShowAddressService from '../../../services/ShowAddressService';
import ShowSingleAddress from '../../../services/ShowSingleAddressService';

export default class AddressController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { cep } = request.body;

    const createAddress = container.resolve(CreateAddressService);

    const address = await createAddress.execute({
      zipCode: cep,
    });

    return response.json(classToClass(address));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const showAddress = container.resolve(ShowAddressService);
    const address = await showAddress.execute();
    return response.json(classToClass(address));
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { cep } = request.params;

    const showSingleAddress = container.resolve(ShowSingleAddress);

    const address = await showSingleAddress.execute({ cep });

    return response.json(classToClass(address));
  }
}
