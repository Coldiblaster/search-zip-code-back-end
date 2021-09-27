export const handleZipCodeFormat = (cep: string): string => {
  return cep.replace('-', '');
};
