// Roles MongoDB
//
// Objetivo:
// Crear roles, usuarios y permisos separados.
//
// Base:
// parqueaderosMultisede
//
// Colecciones:
// usuarios
// vehiculos
// sedes
// zonas
// parqueos
// CREACIÓN DE ROLES
use parqueaderosMultisede;

// ROL ADMINISTRADOR
//
// Control total del sistema
db.createRole({

    role: "adminParqueaderos",

    privileges: [

        {
            resource: {
                db: "parqueaderosMultisede",
                collection: ""
            },

            actions: [
                "find",
                "insert",
                "update",
                "remove",
                "createCollection",
                "dropCollection",
                "listCollections",
                "listIndexes"
            ]
        }

    ],

    roles: [
        {
            role: "dbAdmin",
            db: "parqueaderosMultisede"
        },
        {
            role: "userAdmin",
            db: "parqueaderosMultisede"
        }
    ]

});

// ROL EMPLEADO DE SEDE
//
// Operaciones diarias:
// - Registrar ingresos
// - Registrar salidas
// - Consultar información operativa
db.createRole({

    role: "empleadoSede",

    privileges: [

        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "parqueos"
            },

            actions: [
                "find",
                "insert",
                "update"
            ]
        },


        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "vehiculos"
            },

            actions: [
                "find"
            ]
        },


        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "usuarios"
            },

            actions: [
                "find"
            ]
        },


        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "sedes"
            },

            actions: [
                "find"
            ]
        },


        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "zonas"
            },

            actions: [
                "find"
            ]
        }

    ],

    roles: []

});

// ROL CLIENTE
//
// Solo consulta información.
db.createRole({

    role: "cliente",

    privileges: [

        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "vehiculos"
            },

            actions: [
                "find"
            ]
        },


        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "parqueos"
            },

            actions: [
                "find"
            ]
        }

    ],

    roles: []

});

// CREACIÓN DE USUARIOS

// Usuario administrador

db.createUser({

    user: "adminParqueaderos",

    pwd: "Admin12345",

    roles: [

        {
            role: "adminParqueaderos",
            db: "parqueaderosMultisede"
        }

    ]

});


// Usuario empleado

db.createUser({

    user: "empleadoSede1",

    pwd: "Empleado12345",

    roles: [

        {
            role: "empleadoSede",
            db: "parqueaderosMultisede"
        }

    ]

});


// Usuario cliente

db.createUser({

    user: "clientePrueba",

    pwd: "Cliente12345",

    roles: [

        {
            role: "cliente",
            db: "parqueaderosMultisede"
        }

    ]

});
