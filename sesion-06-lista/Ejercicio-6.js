// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"


// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
//1).
const compra =  ["arroz", "azucar", "cafe", "sal", "carne"];
compra.push("Aceite de Girasol");
console.log(compra)
compra.pop("Aceite de Girasol");
console.log(compra)

const listaFavoritas = [
    { Titulo: "Salvando al soldado", director: "Robin", Fecha: new Date(2010,1,30)  },
    { Titulo: "La aveja maya", director: "Pepe", Fecha: new Date(2009,5,15) },
    { Titulo: "Titanic", director: "Mafer", Fecha: new Date(2011,7,2) },
    
]
const peliculasPosteriores = listaFavoritas.filter(obj => obj.Fecha > new Date(2010,1,1))
console.log(peliculasPosteriores)

const directores = listaFavoritas.map(({director}, indice) => `${indice + 1} - ${director}`)
console.log(directores)

const tituloPeliculas = listaFavoritas.map(({Titulo}, indice) => `${indice + 1} - ${Titulo}`)
console.log(tituloPeliculas)

console.log(directores.concat(tituloPeliculas))
// Metodo de propagación
const listaPropagacion = [...directores, ...tituloPeliculas]

console.log(listaPropagacion)