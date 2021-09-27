import AppError from '../../../shared/errors/AppError';

import FakeAddressRepository from '../repositories/fakes/FakeAddressRepository';
import ShowSingleAddress from './ShowSingleAddressService';

let fakeAddressRepository: FakeAddressRepository;
let showSingleAddress: ShowSingleAddress;

describe('ShowSingleAddress', () => {
  beforeEach(() => {
    fakeAddressRepository = new FakeAddressRepository();

    showSingleAddress = new ShowSingleAddress(fakeAddressRepository);
  });

  it('should be able to list a single address looking for the zip code', async () => {
    const state1 = await fakeAddressRepository.create({
      bairro: 'Centro',
      cep: '19857852',
      localidade: 'Presidente Prudente',
      uf: 'SP',
      complemento: 'Ao lado da praça',
      logradouro: 'Presidente vargas',
    });

    await fakeAddressRepository.create({
      bairro: 'Centro',
      cep: '19857899',
      localidade: 'Presidente Prudente',
      uf: 'SP',
      logradouro: 'Presidente santos',
    });

    const listState = await showSingleAddress.execute({
      cep: state1.cep,
    });

    expect(listState).toEqual(state1);
  });

  it('should not be able to show a non-existent address', async () => {
    expect(
      showSingleAddress.execute({ cep: 'non-existing-address-id' })
    ).rejects.toBeInstanceOf(AppError);
  });
});
