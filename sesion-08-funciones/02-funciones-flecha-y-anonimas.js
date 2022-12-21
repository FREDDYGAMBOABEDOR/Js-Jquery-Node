// Funciones tipo flecha - 
//funciones anónimas --- son las que no estan declaradas
// IMPORTANTE
// Las funciones flecha solo se pueden acceder despues de que has sido inicializada

const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map((valor) => valor * 2)// f.a

console.log(array2)

// const dobleDelValor = valor => {
//     return valor * 2
// }
//    !
//    lo mismo que en la sgts linea

const dobleDelValor = valor => valor * 2
//

console.log(doble(6))



const array3 = array.map(dobleDelValor)// funcion declarada
console.log(array3)

function doble(valor) {
    return valor * 2
}
console.log(dobleDelValor(6))