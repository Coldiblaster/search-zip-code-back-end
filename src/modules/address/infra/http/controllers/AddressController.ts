import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateAddressService from '../../../services/CreateAddressService';
// import UpdateAddressService from '@modules/address/services/UpdateAddressService';
// import DeleteAddressService from '@modules/address/services/DeleteAddressService';
import ShowAddressService from '../../../services/ShowAddressService';
import ShowSingleAddress from '../../../services/ShowSingleAddressService';

export default class AddressController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { bairro, cep, logradouro, uf, localidade, complemento } =
      request.body;

    const createAddress = container.resolve(CreateAddressService);

    const address = await createAddress.execute({
      bairro,
      cep,
      logradouro,
      uf,
      localidade,
      complemento,
    });

    return response.json(classToClass(address));
  }

  // public async update(request: Request, response: Response): Promise<Response> {
  //   const { endereco_id } = request.params;
  //   const { bairro, cep, cidade_id, numero, rua, complemento } = request.body;
  //   const updateAddress = container.resolve(UpdateAddressService);
  //   const user = await updateAddress.execute({
  //     endereco_id,
  //     bairro,
  //     cep,
  //     cidade_id,
  //     numero,
  //     rua,
  //     complemento,
  //   });
  //   return response.json(classToClass(user));
  // }
  // public async delete(request: Request, response: Response): Promise<Response> {
  //   const { endereco_id } = request.params;
  //   const deleteAddress = container.resolve(DeleteAddressService);
  //   await deleteAddress.execute({
  //     endereco_id,
  //   });
  //   return response.json('Endereço excluido com sucesso!');
  // }

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
