export default interface ICreateAddressDTO {
  cep: string;
  logradouro: string;
  complemento?: string;
  bairro: string;
  uf: string;
  localidade: string;
}
