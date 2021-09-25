import { getRepository, Repository } from 'typeorm';

import IAddressRepository from '../../../repositories/IAddressRepository';
import ICreateAddressDTO from '../../../dtos/ICreateAddressDTO';

import Address from '../entities/Address';

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<Address>;

  constructor() {
    this.ormRepository = getRepository(Address);
  }

  public async create(addressData: ICreateAddressDTO): Promise<Address> {
    const address = this.ormRepository.create(addressData);

    await this.ormRepository.save(address);

    return address;
  }

  public async findAllAddress(): Promise<Address[]> {
    const address = await this.ormRepository.find();

    return address;
  }

  public async findByZipCode(cep: string): Promise<Address | undefined> {
    const address = await this.ormRepository.findOne({
      where: {
        cep,
      },
    });

    return address;
  }
}

export default AddressRepository;
