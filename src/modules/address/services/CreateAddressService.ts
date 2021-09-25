import { injectable, inject } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';

import IAddressRepository from '../repositories/IAddressRepository';

import Address from '../infra/typeorm/entities/Address';

interface IRequest {
  bairro: string;
  cep: string;
  uf: string;
  logradouro: string;
  complemento?: string;
  localidade: string;
}

@injectable()
class CreateAddressService {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository
  ) {}

  public async execute({
    bairro,
    cep,
    localidade,
    logradouro,
    complemento,
    uf,
  }: IRequest): Promise<Address> {
    const checkForZipCode = await this.addressRepository.findByZipCode(cep);

    if (checkForZipCode) {
      throw new AppError('Existing zip code.');
    }

    const address = await this.addressRepository.create({
      bairro,
      cep,
      localidade,
      logradouro,
      complemento,
      uf,
    });

    return address;
  }
}

export default CreateAddressService;
