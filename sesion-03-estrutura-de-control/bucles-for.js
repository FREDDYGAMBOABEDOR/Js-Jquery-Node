// Bucles For

// i = i + 1
// i += 1
// i++

for (let i = 0; i <= 10; i++) {
    // Esto es el bucle
    console.log(i)
}

for (let i = 10; i > 0; i-=3) {
    // Esto es el bucle
    console.log(i)
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for (let i = 0; i < lista.length; i++) {//lista.length cuenta los elemente declarados en lista
    console.log(lista[i] * 2)
}

// Estructura for...of
for (let valor of lista) {
    console.log(valor)
}

// Estructura forEach
lista.forEach(valor => {
    console.log(valor)
})

// Estructura for...in
let persona = {
    nombre: "Gorka",
    apellido: "Villar",
    edad: 34,
    isDeveloper: true
}

console.log(persona.nombre)

let prop = "edad";
console.log(persona[prop])  // 34  [prop] esto imprime la propiedad o atributos []

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])//[propiedad] esto imprime la propiedad o atributos []
}