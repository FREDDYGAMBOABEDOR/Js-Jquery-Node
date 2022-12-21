// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

function retornoTrue(){
  
        return true;
  
}


//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

function miAsinc() {
   // return setTimeout(() => {console.log("Hola soy una promesa")}, 5000);
}

const miPromesa = new Promise((resolve, reject) => {
    const segundos = setTimeout(() => {console.log("Hola soy una promesa")}, 5000);
    // Si está todo correcto
    if (segundos != 0) {
        resolve()// resuelve
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta la promesa(5 seg)"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))

// - Una función generadora de índices pares automáticos

function* generaIdPares() {
    let id = 0;
    while(true) {
        id++;
        if (id === 100) {
            return id
        }
        yield id * 2 // Esperando hasta que se vuelva a llamar
    }
}

const gen = generaIdPares();
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)