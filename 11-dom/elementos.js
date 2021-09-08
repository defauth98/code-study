const element = document.getElementById('para-01');
console.log(element.firstChild.nodeName)

element.parentNode // retorna o nó pai.
element.parentElement // retorna o elemento pai.
element.childNodes // retorna um NodeList com todos os nós filhos.
element.children // retorna um HTMLCollection com todos os elementos filhos.
element.firstChild // retorna o primeiro nó filho.
element.firstElementChild // retorna o primeiro elemento filho.
element.lastChild // retorna o último nó filho.
element.lastElementChild // retorna o último elemento filho.
element.nextSibling // retorna o próximo nó.
element.nextElementSibling // retorna o próximo elemento.
element.previousSibling // retorna o nó anterior.
element.previousElementSibling // retorna o elemento anterior.
