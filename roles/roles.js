// Roles y Seguridad MongoDB (RBAC)

//
// Estado actual:
// MongoDB local sin autenticación (--auth desactivado)
//
// Este archivo define:
// - Roles personalizados
// - Usuarios MongoDB
// - Privilegios según el modelo del proyecto
//
// Base principal:
// parqueaderosMultisede
//
// Colecciones:
// usuarios
// vehiculos
// sedes
// zonas
// parqueos




// 1. Seleccionar base administrativa


// use admin;



// 2. Crear rol administrador del sistema


db.createRole({
    role: "adminParqueaderosRole",

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
            role: "userAdmin",
            db: "admin"
        }
    ]
});



// 3. Crear rol empleado de sede


db.createRole({
    role: "empleadoSedeRole",

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



// 4. Crear rol cliente


db.createRole({

    role: "clienteRole",

    privileges: [

        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "parqueos"
            },

            actions: [
                "find"
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
        }
    ],

    roles: []
});



// 5. Crear usuarios MongoDB



// Usuario administrador

db.createUser({

    user: "adminParqueaderos",

    pwd: "Admin12345",

    roles: [
        {
            role: "adminParqueaderosRole",
            db: "admin"
        }
    ]
});


// Usuario empleado

db.createUser({

    user: "empleadoSede1",

    pwd: "Empleado12345",

    roles: [
        {
            role: "empleadoSedeRole",
            db: "admin"
        }
    ]
});


// Usuario cliente

db.createUser({

    user: "clientePrueba",

    pwd: "Cliente12345",

    roles: [
        {
            role: "clienteRole",
            db: "admin"
        }
    ]
});


