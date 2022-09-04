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
    const empleado = empleados.find((e) => e.id === id);

    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${ id } no existe`);
    }
};

const getSalario = (id) => {
    const salario = salarios.find((s) => s.id === id);
    // const salario = salarios.find((s) => s.id === id)?.salario;

    if (salario) {
        callback(null, salario);
    } else {
        callback(`Empleado con id ${ id } no existe`);
    }
};

const id = 3;

getEmpleado(id, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(id, (err, salario) => {
        if (err) {
            return console.log(err);
        }

        console.log(`El empleado: ${ empleado } tiene un salario de: ${ salario }`);
    });
});