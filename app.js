const colors = require('colors');
const{crearArchivo} = require('./Helpers/multiplica.js')
const argv = require('./config/yargs.js')
console.clear();

console.log(colors.green('base: yargs', argv.base));
console.log(colors.green('lista: yargs', argv.listar));
console.log(colors.green('hasta: yargs', argv.hasta));
//const base = 1;
crearArchivo(argv.b, argv.l, argv.h).then(archivo =>console.log(archivo))
.catch(err=>console.log(err));