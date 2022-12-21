// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy
const fecha_hoy = new Date();

console.log(fecha_hoy);


// - La fecha de tu nacimiento
const fecha2= new Date(1991, 08, 03);
console.log(fecha2)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const fecha3 = fecha_hoy > fecha2;
console.log(fecha3)


// - Una variable que contenga el día de tu nacimiento
const fecha4 = fecha2.getDate();
console.log(fecha4);

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const fecha5 = fecha2.getMonth()+1;
console.log(fecha5)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const fecha6 =fecha2.getFullYear();
console.log(fecha6)


