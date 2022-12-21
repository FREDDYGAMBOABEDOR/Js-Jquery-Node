// Casos muy específicos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < lista.length; i++) {
    
    // Continue vuele arriba por esp no imprime en console.log(lista[i]
    if (lista[i] === 3) {
        continue;
    }
    
    
    let j = 50;
    const k = 100;
    
    console.log(lista[i]);
    // accedieendo a variable let que son locales dentro del buble 
    console.log(j);
    console.log(k);
// Si lista es mayor que 5 sal del buble , [break]
    if (lista[i] > 5) {
        break;
    }
}


// Cuál es el ámbito de un bucle
console.log(k);
console.log(i);
console.log(j);