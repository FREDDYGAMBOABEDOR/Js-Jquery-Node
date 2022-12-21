// 1.Cómo trabajar con listas (arrays, arreglos, vectores...)
let var1 = { id: false }
let array = [1, "hola", false, { id: 5 }, null, undefined, var1]

console.log(array)

// Acceder a los valores de un array a través de su posición
// array[indice]  => 0, 1, 2, 3, 4, 5, ....
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

//2. Métodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array

// Valores al final -> Push
array.push("final", 45, 100, false)
console.log(array)

// Valores al principio -> Unshift
array.unshift("inicio", 87, 99)
console.log(array)

//3. Métodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array

const array2 = [1, 3, "hola", false]
// Eliminar Valores al final -> Pop
array2.pop()
console.log(array2)

// Eliminar Valores al principio -> Shift
array2.shift()
console.log(array2)

//4. Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6]

// Eliminar valores .splice(indice, numValoresAEliminar)
array3.splice(1, 3);
console.log(array3)

// Añadir valores .splice(indice, 0(constante ), valores)
array3.splice(2, 0, "hola","bien",3)
console.log(array3)

// Modificar valores .splice(indice, 1(cantidade de valor que elimina), valores)
array3.splice(2, 1, 3)
console.log(array3)