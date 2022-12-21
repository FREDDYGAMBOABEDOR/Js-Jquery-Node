// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)

// - Una variable que contenga tu altura en metros (número de coma flotante)



// - Una variable que contenga tu peso en kilogramos (número de coma flotante)



// - Una variable que contenga tu altura en metros redondeada hacia arriba



// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript


const h_cm = 173
const h_m = 1.73
const peso_kg = 80.7

const h_Redmax = Math.ceil(h_m)
console.log(h_Redmax)

const peso_redmin = Math.floor(peso_kg)
console.log(peso_redmin)

const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE