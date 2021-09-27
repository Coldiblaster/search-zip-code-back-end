import { container } from 'tsyringe';

import IAddressRepository from '../../modules/address/repositories/IAddressRepository';
import AddressRepository from '../../modules/address/infra/typeorm/repositories/AddressRepository';

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository
);
