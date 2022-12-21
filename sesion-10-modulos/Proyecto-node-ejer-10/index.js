import * as moduloMatematicas from './modulos/controller.js'
import chalk from 'chalk';
// const sum = moduloMatematicas.suma(4, 5)
// console.log(sum)

console.log(chalk.green(moduloMatematicas.multiplica(moduloMatematicas.suma(1,2), moduloMatematicas.suma(4,5))))



//CAMBIO DE COLOR PALABRAS
// const error = chalk.bold.red;
// const warning = chalk.hex('#FFA500'); // Orange color

// console.log(error('Error!'));
// console.log(warning('Warning!'));