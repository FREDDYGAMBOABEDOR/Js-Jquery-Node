//Listas, array, arreglo
const lista1 = [ 1 , "hola", true, undefined,null];
const lista2 = new Array(2,"hola", true, undefined,null );
const lista3 = new Array (3);
const lista4 = [lista1, lista2,lista3];

console.log(lista1);

console.log(lista2);

// deja espacios
console.log(lista3);
//lista de lista

console.log(lista4);

//OBJETOS
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Samsung",
    isWhite: false,
    contactos:[
        "Fredy", "jonathan"
    ],
    //objeto dentro de otro objeto
    tarjeta: {
        marca:"Hp",
        almacenamiento: 32}
    
}
// Se ueden agregar o cambia los atributos de los objetos
movil.year = 2019;

console.log(movil.marca)
console.log(movil.tarjeta.marca)
console.log (movil.year)

// fechas 
//Existen librerias de apollo ( MOMENT.JS)

const ahora = new Date();
console.log (ahora)

const fecha_milisegundo = new Date(10);
console.log (fecha_milisegundo)

const fecha_valores = new Date(2022, 0 , 15);
console.log (fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() +1   // Lenguaje humano
const year = ahora.getFullYear()

console.log (dia, mes , year)