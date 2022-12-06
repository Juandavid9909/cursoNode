require("dotenv").config();

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async() => {
    const busquedas = new Busquedas();
    let opt;

    do {
        console.clear();

        opt = await inquirerMenu();
        console.log(opt);

        switch (opt) {
            case 1:
                // Mostrar mensaje
                const termino = await leerInput("Ciudad: ");

                // Buscar el lugar
                const lugares = await busquedas.ciudad(termino);

                // Seleccionar el lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find(l => l.id === id);

                // Clima

                // Mostrar resultados
                console.log("\nInformación de la ciudad".green);
                console.log("Ciudad:", lugarSel.nombre);
                console.log("Lat:", lugarSel.lat);
                console.log("Lng:", lugarSel.lng);
                console.log("Temperatura:", );
                console.log("Mínima:", );
                console.log("Máxima:", );
                break;
        }

        if (opt !== 0) {
            await pausa();
        }
    } while (opt !== 0);
}

main();