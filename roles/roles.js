// Roles MongoDB
//
// Objetivo:
// Crear roles, usuarios y permisos separados.
//
// Estado actual:
// MongoDB desarrollado inicialmente sin --auth.
// Este archivo queda preparado para ejecutarse con autenticación.
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
// CREACIÓN DE ROLES
// Ejecutar desde la base admin
use admin;

// ROL ADMINISTRADOR
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
                "dropCollection"
            ]
        }

    ],

    roles: [
        {
            role: "userAdminAnyDatabase",
            db: "admin"
        }
    ]

});

// ROL EMPLEADO DE SEDE
//
// Operaciones diarias:
// - Registrar ingresos
// - Registrar salidas
// - Consultar información necesaria
//
// No administra usuarios
// No elimina información
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
// Solo consulta información propia.
//
// MongoDB RBAC no filtra documentos por usuario,
// por lo que la restricción por propietario
// normalmente pertenece a la aplicación.
//
// Aquí se limita a solo lectura.
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
use parqueaderosMultisede;

// Usuario Administrador
db.createUser({

    user: "adminParqueaderos",

    pwd: "Admin12345",

    roles: [

        {
            role: "adminParqueaderos",
            db: "admin"
        }

    ]

});

// Usuario Empleado
db.createUser({

    user: "empleadoSede1",

    pwd: "Empleado12345",

    roles: [

        {
            role: "empleadoSede",
            db: "admin"
        }

    ]

});

// Usuario Cliente
db.createUser({

    user: "clientePrueba",

    pwd: "Cliente12345",

    roles: [

        {
            role: "cliente",
            db: "admin"
        }

    ]

});

