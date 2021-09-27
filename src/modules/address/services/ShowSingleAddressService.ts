import { injectable, inject } from 'tsyringe';

import { handleZipCodeFormat } from '../../../shared/utils';
import AppError from '../../../shared/errors/AppError';
import IAddressRepository from '../repositories/IAddressRepository';
import Address from '../infra/typeorm/entities/Address';

interface IRequest {
  cep: string;
}

@injectable()
class ShowSingleAddress {
  constructor(
    @inject('AddressRepository')
    private addressRepository: IAddressRepository
  ) {}

  public async execute({ cep }: IRequest): Promise<Address | undefined> {
    const cepFormatted = handleZipCodeFormat(cep);

    const address = await this.addressRepository.findByZipCode(cepFormatted);

    if (!address) {
      throw new AppError('Address not found.', 204);
    }

    return address;
  }
}

export default ShowSingleAddress;
