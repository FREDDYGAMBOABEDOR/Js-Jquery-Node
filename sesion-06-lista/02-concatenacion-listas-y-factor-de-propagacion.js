// Cómo unir dos listas .concat(lista2)
const lista1 = ["hola", 2, false, null]
const lista2 = ["adiós", 8, true, undefined]

console.log(lista1.concat(lista2))
console.log(lista1)

const lista3 = lista1.concat(lista2)
console.log(lista3)

// Cómo unir dos listas con el factor de propagación lo coloca sin (,) y se ulitizan (...valor)

console.log(...lista3)
//factor de propagación : une la lista en un solo elemento
const lista4 = [...lista1, ...lista2]

console.log(lista4)

// ERROR!! Mal entendido el concepto del factor de propagación
const lista5 = [lista1, lista2]
console.log(lista5)