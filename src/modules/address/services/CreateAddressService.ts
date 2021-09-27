import { injectable, inject } from 'tsyringe';
import axios from 'axios';

import AppError from '../../../shared/errors/AppError';
import { handleZipCodeFormat } from '../../../shared/utils';

import IAddressRepository from '../repositories/IAddressRepository';

import Address from '../infra/typeorm/entities/Address';

interface IResponse {
  bairro: string;
  cep: string;
  uf: string;
  logradouro: string;
  complemento?: string;
  localidade: string;
}

interface IRequest {
  zipCode: string;
}

@injectable()
class CreateAddressService {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository
  ) {}

  public async execute({ zipCode }: IRequest): Promise<Address> {
    const cepFormatted = handleZipCodeFormat(zipCode);

    const checkForZipCode = await this.addressRepository.findByZipCode(
      cepFormatted
    );

    if (checkForZipCode) {
      throw new AppError('Existing zip code.');
    }

    const url = `https://viacep.com.br/ws/${cepFormatted}/json/`;

    const { bairro, localidade, logradouro, uf, complemento } = await axios
      .get<IResponse>(url)
      .then(response => {
        return response.data;
      })
      .catch(() => {
        throw new AppError('Zip code not found in the base of the ViaCEP.');
      });

    const address = await this.addressRepository.create({
      bairro,
      cep: cepFormatted,
      localidade,
      logradouro,
      uf,
      complemento,
    });

    return address;
  }
}

export default CreateAddressService;
