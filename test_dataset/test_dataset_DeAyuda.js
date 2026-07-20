// test_de_validaciones.js

// Es un Archivo de pruebas
// ejecutar con mongosh test_validations.js
// ejecutar con  node test_validations.js

use("parqueaderosMultisede");

print("\n=================================");
print(" INICIO PRUEBAS DE VALIDACIÓN ");
print("=================================\n");


// 
// LIMPIEZA DE DATOS DE PRUEBA
// 

db.usuarios.deleteMany({
    correo:"test@parqueaderos.com"
});

db.sedes.deleteMany({
    nombre:"Sede Prueba"
});


// 
// CREACIÓN DE DATOS BASE VÁLIDOS
// 


const usuarioId = new ObjectId();

const sedeId = new ObjectId();

const zonaId = new ObjectId();

const vehiculoId = new ObjectId();


// 
// PRUEBA USUARIOS
// 


print("---- USUARIOS ----");


// Documento válido

db.usuarios.insertOne({

    _id:usuarioId,

    nombreCompleto:"Usuario Prueba",

    documento:"999999999",

    correo:"test@parqueaderos.com",

    telefono:"55555555",

    rol:"CLIENTE",

    estado:"ACTIVO"

});


print("✓ Usuario válido aceptado");



// Rol inválido

try {

    db.usuarios.insertOne({

        nombreCompleto:"Usuario Error",

        documento:"888888888",

        correo:"error@parqueaderos.com",

        telefono:"55555555",

        rol:"SUPERADMIN",

        estado:"ACTIVO"

    });


}
catch(error){

    print("✓ Rol inválido rechazado correctamente");

}



// Campo obligatorio faltante

try {

    db.usuarios.insertOne({

        nombreCompleto:"Usuario Sin Correo",

        documento:"777777777",

        telefono:"55555555",

        rol:"CLIENTE",

        estado:"ACTIVO"

    });


}
catch(error){

    print("✓ Campo obligatorio rechazado correctamente");

}



// 
// PRUEBA SEDES
// 


print("\n---- SEDES ----");



db.sedes.insertOne({

    _id:sedeId,

    nombre:"Sede Prueba",

    direccion:"Zona 10",

    capacidadTotal:100,

    estado:"ACTIVA"

});


print("✓ Sede válida aceptada");



// Capacidad negativa

try {


    db.sedes.insertOne({

        nombre:"Sede Error",

        direccion:"Zona 1",

        capacidadTotal:-5,

        estado:"ACTIVA"

    });


}
catch(error){

    print("✓ Capacidad negativa rechazada correctamente");

}



// Estado inválido

try {


    db.sedes.insertOne({

        nombre:"Sede Estado Error",

        direccion:"Zona 2",

        capacidadTotal:50,

        estado:"ABIERTA"

    });


}
catch(error){

    print("✓ Estado inválido rechazado correctamente");

}



// 
// PRUEBA ZONAS
// 


print("\n---- ZONAS ----");


db.zonas.insertOne({

    _id:zonaId,

    sedeId:sedeId,

    nombre:"Zona Prueba",

    tipoZona:"GENERAL",

    capacidad:50,

    cuposDisponibles:40,

    tiposVehiculoPermitidos:[

        "AUTOMOVIL",

        "MOTOCICLETA"

    ],

    tarifa:Decimal128("10.00"),

    estado:"ACTIVA"

});


print("✓ Zona válida aceptada");



// Tarifa incorrecta

try {


    db.zonas.insertOne({

        sedeId:sedeId,

        nombre:"Zona Error",

        tipoZona:"GENERAL",

        capacidad:20,

        cuposDisponibles:10,

        tiposVehiculoPermitidos:[

            "AUTOMOVIL"

        ],

        tarifa:"10",

        estado:"ACTIVA"

    });


}
catch(error){

    print("✓ Tarifa incorrecta rechazada correctamente");

}



// Cupos negativos

try {


    db.zonas.insertOne({

        sedeId:sedeId,

        nombre:"Zona Cupos Error",

        tipoZona:"GENERAL",

        capacidad:20,

        cuposDisponibles:-1,

        tiposVehiculoPermitidos:[

            "AUTOMOVIL"

        ],

        tarifa:Decimal128("5.00"),

        estado:"ACTIVA"

    });


}
catch(error){

    print("✓ Cupos negativos rechazados correctamente");

}



// 
// PRUEBA VEHÍCULOS
// 


print("\n---- VEHÍCULOS ----");



db.vehiculos.insertOne({

    _id:vehiculoId,

    placa:"TEST123",

    tipoVehiculo:"AUTOMOVIL",

    marca:"Toyota",

    modelo:"Corolla",

    color:"Blanco",

    usuarioId:usuarioId

});


print("✓ Vehículo válido aceptado");



// Tipo vehículo inválido

try {


    db.vehiculos.insertOne({

        placa:"ERROR123",

        tipoVehiculo:"AVION",

        marca:"Marca",

        modelo:"Modelo",

        color:"Rojo",

        usuarioId:usuarioId

    });


}
catch(error){

    print("✓ Tipo vehículo inválido rechazado correctamente");

}



// 
// PRUEBA PARQUEOS
// 


print("\n---- PARQUEOS ----");


db.parqueos.insertOne({

    vehiculoId:vehiculoId,

    usuarioId:usuarioId,

    sedeId:sedeId,

    zonaId:zonaId,

    placaSnapshot:"TEST123",

    tipoVehiculoSnapshot:"AUTOMOVIL",

    fechaIngreso:new Date(),

    estado:"ACTIVO"

});


print("✓ Parqueo válido aceptado");



// Estado inválido

try {


    db.parqueos.insertOne({

        vehiculoId:vehiculoId,

        usuarioId:usuarioId,

        sedeId:sedeId,

        zonaId:zonaId,

        placaSnapshot:"TEST123",

        tipoVehiculoSnapshot:"AUTOMOVIL",

        fechaIngreso:new Date(),

        estado:"RESERVADO"

    });


}
catch(error){

    print("✓ Estado parqueo inválido rechazado correctamente");

}



// 
// PRUEBA ÍNDICES UNIQUE
// 


print("\n---- ÍNDICES UNIQUE ----");


// Documento duplicado

try {


    db.usuarios.insertOne({

        nombreCompleto:"Duplicado",

        documento:"999999999",

        correo:"duplicado1@test.com",

        telefono:"55555555",

        rol:"CLIENTE",

        estado:"ACTIVO"

    });


}
catch(error){

    print("✓ Documento duplicado rechazado correctamente");

}



// Correo duplicado

try {


    db.usuarios.insertOne({

        nombreCompleto:"Duplicado Correo",

        documento:"111111111",

        correo:"test@parqueaderos.com",

        telefono:"55555555",

        rol:"CLIENTE",

        estado:"ACTIVO"

    });


}
catch(error){

    print("✓ Correo duplicado rechazado correctamente");

}



// Placa duplicada

try {


    db.vehiculos.insertOne({

        placa:"TEST123",

        tipoVehiculo:"AUTOMOVIL",

        marca:"Honda",

        modelo:"Civic",

        color:"Negro",

        usuarioId:usuarioId

    });


}
catch(error){

    print("✓ Placa duplicada rechazada correctamente");

}



// 
// LIMPIEZA FINAL
// 

db.parqueos.deleteMany({

    vehiculoId:vehiculoId

});

db.vehiculos.deleteMany({

    _id:vehiculoId
});

db.zonas.deleteMany({

    _id:zonaId
});

db.sedes.deleteMany({

    _id:sedeId
});

db.usuarios.deleteMany({
    _id:usuarioId
});

print("\n=================================");
print(" VALIDACIONES COMPLETADAS ");
print("=================================\n");