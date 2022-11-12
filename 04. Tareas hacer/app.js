require("colors");

const { mostrarMenu } = require("./helpers/mensajes");

console.clear();

const main = async() => {
    console.log("Hola mundo");

    mostrarMenu();
};

main();