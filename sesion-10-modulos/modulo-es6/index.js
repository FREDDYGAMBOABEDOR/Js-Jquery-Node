// import { suma, eleva, nombre } from './modulos/matematicas.js'// por modulo
import * as moduloMatematicas from './modulos/matematicas.js'  // todas la funciones***
import getAutor, { libro } from './modulos/literatura.js'
//import getAutor from './modulos/literatura.js'
//***Por modulos */
// const sum = suma(4, 12)
// console.log(sum)


const sum = moduloMatematicas.suma(4, 12)
console.log(sum)

const potencia = moduloMatematicas.eleva(2, 21)
console.log(potencia)

console.log(moduloMatematicas.nombre)

console.log(getAutor())
console.log(libro)

