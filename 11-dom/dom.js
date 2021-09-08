// Busca o elemento pelo ID
const element = document.getElementById('element');

// Busca elementos pela classe
const element = document.getElementsByClassName('class');

// Busca elementos pela tag
const element = document.getElementsByTagName('div');

// Usa de seletores CSS para busca um elemento
const element = document.querySelector('.classElement');

// Usa de seletores CSS para busca um elemento
const elements = document.querySelectorAll('.element');

const newElement = document.createElement('div');

const anotherElement = document.createElement('span');
anotherElement.innerHTML = 'Isso aqui é um span';

newElement.appendChild(anotherElement);