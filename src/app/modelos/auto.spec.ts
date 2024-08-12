import { Auto } from './auto';

describe('Auto', () => {
  it('should create an instance', () => {
    const auto: Auto = {
      id: 1,
      marca: 'Toyota',
      modelo: 'Corolla',
      año: 2021,
      precio: 20000
    };
    expect(auto).toBeTruthy();
  });
});
