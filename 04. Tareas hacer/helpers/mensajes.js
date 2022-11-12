require("colors");

const mostrarMenu = () => {
    console.clear();

    console.log("===========================".green);
    console.log("   Seleccione una opción   ".green);
    console.log("===========================\n".green);
};

module.exports = {
    mostrarMenu
};