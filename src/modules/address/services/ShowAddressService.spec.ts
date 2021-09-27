import AppError from '../../../shared/errors/AppError';

import FakeAddressRepository from '../repositories/fakes/FakeAddressRepository';
import ShowAddressService from './ShowAddressService';

let fakeAddressRepository: FakeAddressRepository;
let showAddress: ShowAddressService;

describe('ShowAddress', () => {
  beforeEach(() => {
    fakeAddressRepository = new FakeAddressRepository();

    showAddress = new ShowAddressService(fakeAddressRepository);
  });

  it('should be able to list all registered address', async () => {
    const address1 = await fakeAddressRepository.create({
      bairro: 'Centro',
      cep: '19857852',
      localidade: 'Presidente Prudente',
      uf: 'SP',
      complemento: 'Ao lado da praça',
      logradouro: 'Presidente vargas',
    });

    const address2 = await fakeAddressRepository.create({
      bairro: 'Centro',
      cep: '1985777',
      localidade: 'Presidente Prudente',
      uf: 'SP',
      logradouro: 'Sebastião Barbosa',
    });

    const listAddress = await showAddress.execute();

    expect(listAddress).toEqual([address1, address2]);
  });

  it('should not be able to show a non-existent address', async () => {
    expect(showAddress.execute()).rejects.toBeInstanceOf(AppError);
  });
});
