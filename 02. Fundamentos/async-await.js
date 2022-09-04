const empleados = [{
        id: 1,
        nombre: "Fernando"
    },
    {
        id: 2,
        nombre: "Linda"
    },
    {
        id: 3,
        nombre: "Karen"
    }
];

const salarios = [{
        id: 1,
        nombre: 1000
    },
    {
        id: 2,
        nombre: 1500
    }
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id);

        (empleado) ? resolve(empleado): reject(`No existe empleado con id ${ id }`);
    });
};

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id);

        (salario) ? resolve(salario): reject(`No existe empleado con id ${ id }`);
    });
};

const getInfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${ empleado } es de ${ salario }`;
    } catch (error) {
        return error;
    }
};

const id = 1;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));