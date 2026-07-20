//  Pruebas RBAC MongoDB
//
// Objetivo:
// Validar permisos de:
// - Administrador
// - Empleado de sede
// - Cliente
//
// Requiere MongoDB con autenticación habilitada.
//
// Base:
// parqueaderosMultisede
//


// PRUEBA 1
// Usuario administrador

// mongosh --username adminParqueaderos
//        --password Admin12345
//        --authenticationDatabase parqueaderosMultisede


// use parqueaderosMultisede;


// Debe funcionar
db.parqueos.find();


// Debe funcionar
db.usuarios.find();


// Debe permitir insertar usuarios
db.usuarios.insertOne({

    nombre: "Usuario Prueba Admin",

    rol: "CLIENTE",

    activo: true

});


// Debe permitir actualizar

db.parqueos.updateOne(

    {
        estado: "ACTIVO"
    },

    {
        $set: {
            estado: "FINALIZADO"
        }
    }

);



// PRUEBA 2
// Usuario empleado sede


// mongosh --username empleadoSede1
//        --password Empleado12345
//        --authenticationDatabase parqueaderosMultisede



// // use parqueaderosMultisede;


// Debe funcionar
db.parqueos.find();


// Debe funcionar
db.vehiculos.find();


// Debe permitir registrar ingreso

db.parqueos.insertOne({

    vehiculoId: null,

    usuarioId: null,

    sedeId: null,

    zonaId: null,

    placaSnapshot: "TEST001",

    tipoVehiculoSnapshot: "AUTOMOVIL",

    fechaIngreso: new Date(),

    estado: "ACTIVO"

});


// Debe permitir actualizar salida

db.parqueos.updateOne(

    {
        placaSnapshot: "TEST001"
    },

    {
        $set: {

            estado: "FINALIZADO",

            fechaSalida: new Date()

        }
    }

);



// PRUEBAS QUE DEBEN FALLAR
// Empleado NO puede administrar usuarios


db.usuarios.deleteOne({

    nombre: "Usuario Prueba Admin"

});


// Resultado esperado:
//
// Unauthorized
//





// PRUEBA 3
// Usuario cliente


// mongosh --username clientePrueba
//        --password Cliente12345
//        --authenticationDatabase parqueaderosMultisede



// // use parqueaderosMultisede;


// Debe funcionar
db.parqueos.find();


// Debe funcionar
db.vehiculos.find();


// Debe fallar
// Cliente no puede crear parqueos


db.parqueos.insertOne({

    placaSnapshot: "CLIENTE001",

    estado: "ACTIVO"

});


// Resultado esperado:
//
// Unauthorized




// Debe fallar
// Cliente no puede actualizar


db.parqueos.updateOne(

    {
        estado: "ACTIVO"
    },

    {
        $set:{
            costoTotal:100
        }
    }

);


// Resultado esperado:
//
// Unauthorized



// FIN roles_test.js