const array = [1, 2, 3, 4]

array.forEach(element => {
  console.log(element) // 1
});

array.find((element) => {
  if (element === 2) {
    return element;
  }
}) // 2

array.map(element => element * 2) // [2, 4, 6, 8]

const fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']