function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}

(param1, param2, paramN) => { statements };
(param1, param2, paramN) => expression;
// equivalente a: => { return expression; }

// Parênteses são opcionais quando só há um nome de parâmetro:
(singleParam) => { statements };
singleParam => { statements };

// A lista de parâmetros para uma função sem parâmetros deve ser escrita com um par de parênteses.
() => { statements };