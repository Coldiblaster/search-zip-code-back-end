import { injectable, inject } from 'tsyringe';

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
    const address = await this.addressRepository.findByZipCode(cep);

    if (!address) {
      throw new AppError('Address not found.');
    }

    return address;
  }
}

export default ShowSingleAddress;
