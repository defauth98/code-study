class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  area() {
    return this.altura * this.largura;
  }
}

const retangulo = new Retangulo(10, 5);

console.log(retangulo.altura)
console.log(retangulo.largura)