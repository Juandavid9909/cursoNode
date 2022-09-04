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
}

const id = 1;

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado.nombre;
        return getSalario(id);
    })
    .then(salario => console.log(`El empleado: ${ nombre } tiene un salario de ${ salario }`))
    .catch(err => console.log(err));