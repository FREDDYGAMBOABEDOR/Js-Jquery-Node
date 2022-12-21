// Cómo obtener una lista a partir de otra .slice()
const array = ["hola", 1, 2, 3, true, null, "adios"]

// NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
// esto es por indice desde 0
console.log(array.slice(1, 4))
const array2 = array.slice(2, 5)
console.log(array2)
// el -2 es de atras para adelante
const array3 = array.slice(2, -2)
console.log(array3)