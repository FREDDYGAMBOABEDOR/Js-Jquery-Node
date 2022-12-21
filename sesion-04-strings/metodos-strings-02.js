// Métodos de cadenas de texto (parte 2)
let input = "ESCORpio"
let db = "escorpio"

// toLowerCase() - a palabras minusculas
//toUpperCase()  - a palabras mayusculas
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())

// Formas de concatenar dos cadenas de caracteres
let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

// Eliminar espacios al inicio y al final
let str_3 = "    Hola soy un string con espacios al final.   "
console.log(str_3.length)
// trim()
console.log(str_3.trim().length)//eliminar todos
console.log(str_3.trimStart().length)//elimina al inicio
console.log(str_3.trimEnd().length)// elimina al fin

// Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4" // ["H", "o", "l", "a", " ", "s"........]

console.log(str_4.charAt(6))
console.log(str_4[5])

// Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es Villar"
console.log(str_5.indexOf("Gorka"))// posicion a buscar
console.log(str_5.charAt(9))// una letra
console.log(str_5.lastIndexOf("Gorka"))// todos las palabras iguales