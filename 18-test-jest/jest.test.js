const somar = (number1, number2) => number1 + number2;

// Esse seria um teste de unidade, pois testa uma unidade da aplicação
// que nesse caso seria a função, mas também poderia ser uma classe
describe('Suite de testes', () => {
  describe('somar', () => {
    test('Testa se dado dois valores a função responde o valor certo', () => {
      const result = somar(2, 5);

      expect(result).toEqual(7);
    })
  })
})