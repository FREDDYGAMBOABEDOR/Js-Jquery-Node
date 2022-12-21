// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, "hola"]

const miSet = new Set(array)
//array conjunto ordenados de valores o objetos
console.log(array)

//Set un conjunto no ordenado de valares unicos o elementos unicos
// no guarda elementos que ya existen
console.log(miSet)

// .add()------ agregar
miSet.add(9)
console.log(miSet)
miSet.add(4)
console.log(miSet)

// .delete()--- eliminar set
miSet.delete("hola")
console.log(miSet)

// .clear()---- eliminar todo
// miSet.clear()
// console.log(miSet)

// .has()---- metodo contiene un valor
// console.log(array.includes(2))// esto muestra los elementos que contiene dentro de nuestro array
console.log(miSet.has(50))

// .size--> es una propiedad para saber cuanto valores contiene el arreglo
// declarando new
console.log(miSet.size)

miSet.forEach(valor => {
    console.log(valor)
})
// convertiendo a iterador
const it_miSet = miSet.values()
console.log(it_miSet)
//(ar_miSet[2]) se puede acceder sin conquete y con corquetes
const ar_miSet = [ ...miSet ]
console.log(ar_miSet[2])