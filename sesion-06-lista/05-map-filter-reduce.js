// Trabajar con métodos más avanzados
// .map() .filter() .reduce()
//map (No da un valor de la misma longitud )
const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]
// Podemos acceder a cada un o de los valores por el foreach
const val = array.forEach(v => {
    console.log(v)
    //console.log(v[0])
    return 4
})
console.log(val)

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
//const newArray = array.map((valor) => `${valor}`)
console.log(newArray)

//metodo filter
const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]
// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30) {
//         return true
//     } else {
//         return false
//     }
// })
const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Lucía")
console.log(nuevaLista)

//.reduce()
const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)