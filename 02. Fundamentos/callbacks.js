setTimeout(() => {
    console.log("Hola Mundo");
}, 1000);

const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: "Juan"
    }

    setTimeout(() => {
        callback(usuario);
    }, 1500);
}

getUsuarioByID(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});