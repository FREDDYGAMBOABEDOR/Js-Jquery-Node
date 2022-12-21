// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior



// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const datosPersonales = {
  
    nombre: "Franklin",
    apellido: "Gamboa",
    edad: 31,
    altura: 1.72,
    isDeveloper: true
};
// - Una variable que obtenga tu edad a partir del objeto anterior
const edad = datosPersonales.edad;
console.log(edad)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista2 =  
[
    {...datosPersonales},
    { nombre: "Juana",
    apellido: "Flores",
    edad: 40,
    altura: 1.72,
    isDeveloper: true
    },
    
    
    { nombre: "Jonathan",
    apellido: "Atahualpa",
    edad: 21,
    altura: 1.72,
    isDeveloper: true
    }

];
// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const lista3 = lista2.sort((a, b) => b.edad - a.edad)
console.log(lista3)