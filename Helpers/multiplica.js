const colors = require('colors');
const fs = require('fs');
let name = '';
const crearArchivo = async (base=5, listar= false,hasta=10) => {

    try {
        const multi = retornaMulti(base, listar,hasta);
        return multi;
    }
    catch (error) {
        return error
    }

}

const retornaMulti = (base, listar,hasta) => {

    return new Promise((resolve, reject) => {
        let salida = '';
        for (let i = 1; i < hasta+1; i++) {
            salida += (`${base} * ${i} = ${i * base}\n`)
        }
        console.log(listar);
        if (listar === true) {
            console.log('===============');
            console.log(` Tabla del: ${base}`)
            console.log('===============');
            console.log(colors.blue(salida));
        }
        fs.writeFileSync(`./Salidas/tabla-${base}-hasta-${hasta}.txt`, salida);
        resolve(`tabla-${base}.txt creado`);
        (salida) ? resolve(salida) : reject(`No se pudo hacer el archivo tabla-${base}`);
    })
        ;
}

module.exports = {
    crearArchivo
}