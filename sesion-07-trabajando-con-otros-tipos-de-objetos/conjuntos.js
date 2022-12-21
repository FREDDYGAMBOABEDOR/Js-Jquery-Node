// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

const familia = [
    "Ana Benalcaza",
    "Claudio Gamboa",
    "Ivanna Gamboa",
    "Franklin Gamboa",
    "Franklin Gamboa"
];

const miSet = new Set(familia)
console.log (miSet)
// Agregar

miSet.add("Javascript ya que empieza a formar parte de mi vida ;");

console.log (miSet)


// RESPUESTA
// const familia = new Set(["Gorka", "Maria", "Marta", "Gorka"])
// familia.add("Gorka")
// familia.add("Javascript")

// console.log(familia)