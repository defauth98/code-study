// for
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
  console.log(element);
}

// for in
const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
} 

// for of
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x; //BMWVolvoMini
}