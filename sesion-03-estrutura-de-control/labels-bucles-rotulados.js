// break y continue
// labels

let unidades = 0
let decenas = 0

bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El número actual es: ${decenas}${unidades}`)
        unidades++
        if (unidades === 10) {
            unidades = 0
            break bucleUnidades// salta
        }
        if (decenas === 2) {
            break bucleDecenas // salta si llega a 2
        }
    }
    decenas++// termina el bucle
}
console.log("Ya hemos terminado")