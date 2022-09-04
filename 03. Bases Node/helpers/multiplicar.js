const fs = require('fs');

const crearArchivo = async(base = 5) => {
    // return new Promise((resolve, reject) => {
    //     console.log("================");
    //     console.log("  Tabla del ", base);
    //     console.log("================");

    //     let salida = "";

    //     for (let i = 1; i <= 10; i++) {
    //         salida += `${ base } x ${ i } = ${ base * i }\n`;
    //     }

    //     fs.writeFileSync(`tabla-${ base }.txt`, salida);

    //     resolve(`tabla-${ base }.txt`);
    // });

    try {
        console.log("================");
        console.log("  Tabla del ", base);
        console.log("================");

        let salida = "";

        for (let i = 1; i <= 10; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
        }

        fs.writeFileSync(`tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};