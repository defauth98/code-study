const pessoas = ['Pedro', 'Maria', 'João'];

const todasAsPessoas = [...pessoas, 'Marcus', 'Tiago'];

// [ 'Pedro', 'Maria', 'João', 'Marcus', 'Tiago' ]
console.log(todasAsPessoas);

(argA, argB, ...outrosArgs) => { argA, argB, outrosArgs }

function soma(...valores) {
  let total = 0

  for (const item of valores) {
    total += parseInt(item, 10)
  }

  return total
}

console.log(soma(1, 2, 3, 4, 50, 10, 23))