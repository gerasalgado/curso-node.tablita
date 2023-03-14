const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        default: '5',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: 'false',
        describe: 'Muestra la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: '10',
        describe: 'Veces que se repetira la multiplicacion'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base debe de ser un número'
        }
        return true;
    })
    .argv;

    module.exports=argv;