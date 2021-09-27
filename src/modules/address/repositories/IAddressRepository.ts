import Address from '../infra/typeorm/entities/Address';
import ICreateAddressDTO from '../dtos/ICreateAddressDTO';

export default interface IAddressRepository {
  create(data: ICreateAddressDTO): Promise<Address>;
  findAllAddress(): Promise<Address[]>;
  findByZipCode(cep: string): Promise<Address | undefined>;
}
