import { v4 as uuid } from 'uuid';

import IAddressRepository from '../IAddressRepository';
import ICreateAddressDTO from '../../dtos/ICreateAddressDTO';

import Address from '../../infra/typeorm/entities/Address';

class FakeAddressRepository implements IAddressRepository {
  private address: Address[] = [];

  public async create(addressData: ICreateAddressDTO): Promise<Address> {
    const address = new Address();

    Object.assign(address, { id: uuid() }, addressData);

    this.address.push(address);

    return address;
  }

  public async findAllAddress(): Promise<Address[]> {
    const { address } = this;

    return address;
  }

  public async findByZipCode(cep: string): Promise<Address | undefined> {
    const findAddress = this.address.find(address => address.cep === cep);

    return findAddress;
  }
}

export default FakeAddressRepository;
