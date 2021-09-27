import AppError from '../../../shared/errors/AppError';

import FakeAddressRepository from '../repositories/fakes/FakeAddressRepository';
import CreateAddressService from './CreateAddressService';

let fakeAddressRepository: FakeAddressRepository;
let createAddress: CreateAddressService;

describe('CreateAddress', () => {
  beforeEach(() => {
    fakeAddressRepository = new FakeAddressRepository();

    createAddress = new CreateAddressService(fakeAddressRepository);
  });

  it('should be able to create a new address', async () => {
    const address = await createAddress.execute({
      zipCode: '19878-999',
    });

    expect(address).toHaveProperty('id');
  });

  it('should not be able to create a new identical zip code', async () => {
    await fakeAddressRepository.create({
      bairro: 'Centro',
      cep: '19857852',
      localidade: 'Presidente Prudente',
      uf: 'SP',
      complemento: 'Ao lado da praça',
      logradouro: 'Presidente vargas',
    });

    await expect(
      createAddress.execute({
        zipCode: '19857852',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should return error if zip code does not exist in via zip', async () => {
    await expect(
      createAddress.execute({
        zipCode: 'there is no zip code',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
