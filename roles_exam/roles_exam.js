// primero definimos 3 roles personalizados (adminGeneral, empleadoZona, clienteZona) usando db.createRole().


// primer rol adminGeneral
db.createRole({
    role: "adminGeneral",
    privileges: [
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "vehiculos"
            },
            actions: ["find"]
        },
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "parqueos"
            },
            actions: ["find"]
        }
    ]
});

// segundo rol empleadoZona
db.createRole({
    role: "empleadoZona",
    privileges: [
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "parqueos"
            },
            actions: ["find"]
        }
    ]
});

// tercer rol clienteZona
db.createRole({
    role: "clienteZona",
    privileges: [
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "vehiculos"
            },
            actions: ["find"]
        }
    ]
});

// establecemos permisos especificos sobre ciertas colecciones (readWrite, find, insert, update, etc.)

// a continuacion se establecen permisos para el rol adminGeneral
db.createRole({
    role: "adminGeneral",
    privileges: [
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "vehiculos"
            },
            actions: ["readWrite",
                      "delete",
                      "find", 
                      "update", 
                      "insert",
                      "createIndex",
                      "listIndexes",
                      "dropIndex",
                      "drop"
            ]
        },
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "parqueos"
            },
            actions: ["readWrite",
                      "delete",
                      "find", 
                      "update", 
                      "insert",
                      "createIndex",
                      "listIndexes",
                      "dropIndex",
                      "drop"
            ]
        },
        {
            resource: {
                 db: "parqueaderosMultisede",
                 collection: "usuarios"
        },
             actions: ["readWrite",
                  "delete",
                  "find", 
                  "update", 
                  "insert",
                  "createIndex",
                  "listIndexes",
                  "dropIndex",
                  "drop"
        ]
        },
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "sedes"
            },
            actions: ["readWrite",
                      "delete",
                      "find", 
                      "update", 
                      "insert",
                      "createIndex",
                      "listIndexes",
                      "dropIndex",
                      "drop"
            ]

        },
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "zonas"
            },
            actions: ["readWrite",
                      "delete",
                      "find", 
                      "update", 
                      "insert",
                      "createIndex",
                      "listIndexes",
                      "dropIndex",
                      "drop"
            ]
        }
    ]
});

// a continuacion se establecen permisos para el rol empleadoZona
db.createRole({
    role: "empleadoZona",
    privileges: [
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "parqueos"
            },
            actions: ["readWrite", 
                      "find",
                      "update",
                      "insert",
                      "delete"
            ]
        },
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "vehiculos"
            },
            


            
            actions: ["find", 
                      "update",
                      "insert",
                      "delete"
            ]
        },
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "usuarios"
            },
            actions: ["find", 
                      "update",
                      "insert",
                      "delete"
            ]
        }

    ]
});

// a continuacion se establecen permisos para el rol clienteZona
db.createRole({
    role: "clienteZona",
    privileges: [
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "vehiculos"
            },
            actions: ["find"]
        },
        {
            resource: {
                db: "parqueaderosMultisede",
                collection: "parqueos"
            },
            actions: ["find"]
        }
    ]
});


// Creacion de usuarios

// usuario adminGeneral
db.createUser({
    user: "adminGeneral",
    pwd: "Admin007",
    roles: {
        role: "adminGeneral",
        db: "parqueaderosMultisede"
    }
   
});
//El proposito de este rol es el de poder administrar todo el sistema de parqueos, osea podemos crear sedes, zonas, parqueos, vehiculos y parqueos, permitiendole leer y escribir, actualizar y borrar, ademas de poder crear indices..

// usuario empleado
db.createUser({
    user: "empleado",
    pwd: "Empleado12345",
    roles: 
    { 
     role: "empleadoZona",
     db: "parqueaderosMultisede"
    }
});
// El proposito de este rol empleado es el de poder administrar parqueos,vehiculos y usuarios permitiendole leer y escribir, actualizar y borrar ademas de poder crear indices, listar indices y borrar indices



// usuario clienteZona
db.createUser({
    user: "clienteZona",
    pwd: "Cliente12345",
    roles: {
        role: "clienteZona",
        db: "parqueaderosMultisede"
    }
});

// El proposito de este rol clienteZona es el de poder administrar vehiculos y parqueos permitiendole buscar vehiculos y parqueos. Porque es solo un cliente