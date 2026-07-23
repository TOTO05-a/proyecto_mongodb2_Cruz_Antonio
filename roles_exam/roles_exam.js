// roles_exam

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
