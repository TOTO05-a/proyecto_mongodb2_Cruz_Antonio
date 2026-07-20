// ======================================================
// Proyecto #1 - Parqueaderos Multisede
// Archivo: db_config.js
// Motor: MongoDB + mongosh
// ======================================================


// ======================================================
// Selección de base de datos
// ======================================================

use("parqueaderosMultisede");


// ======================================================
// ENUMS DEL SISTEMA
// ======================================================

const ROLES = [
    "ADMIN",
    "EMPLEADO",
    "CLIENTE"
];


const ESTADOS_USUARIO = [
    "ACTIVO",
    "INACTIVO"
];


const TIPOS_VEHICULO = [
    "AUTOMOVIL",
    "MOTOCICLETA",
    "BICICLETA",
    "CAMION"
];


const ESTADOS_ACTIVIDAD = [
    "ACTIVA",
    "INACTIVA"
];


const ESTADOS_PARQUEO = [
    "ACTIVO",
    "FINALIZADO"
];


// ======================================================
// Función creación de colecciones
// ======================================================

function crearColeccion(nombre, schema) {

    if (db.getCollectionNames().includes(nombre)) {

        print(`La colección ${nombre} ya existe`);

        return;

    }


    db.createCollection(
        nombre,
        {
            validator:
            {
                $jsonSchema: schema
            },

            validationLevel:"strict",

            validationAction:"error"
        }
    );


    print(`Colección ${nombre} creada correctamente`);

}




// ======================================================
// SCHEMA USUARIOS
// ======================================================


const usuariosSchema = {

    bsonType:"object",

    required:[
        "nombreCompleto",
        "documento",
        "correo",
        "telefono",
        "rol",
        "estado"
    ],


    additionalProperties:false,


    properties:{


        nombreCompleto:
        {
            bsonType:"string",
            minLength:3
        },


        documento:
        {
            bsonType:"string",
            minLength:5
        },


        correo:
        {
            bsonType:"string"
        },


        telefono:
        {
            bsonType:"string"
        },


        rol:
        {
            bsonType:"string",
            enum:ROLES
        },


        estado:
        {
            bsonType:"string",
            enum:ESTADOS_USUARIO
        }

    }

};
// ======================================================
// SCHEMA VEHICULOS
// ======================================================


const vehiculosSchema = {

    bsonType:"object",

    required:[
        "placa",
        "tipoVehiculo",
        "marca",
        "modelo",
        "color",
        "usuarioId"
    ],


    additionalProperties:false,


    properties:{


        placa:
        {
            bsonType:"string",
            minLength:3
        },


        tipoVehiculo:
        {
            bsonType:"string",
            enum:TIPOS_VEHICULO
        },


        marca:
        {
            bsonType:"string",
            minLength:2
        },


        modelo:
        {
            bsonType:"string",
            minLength:1
        },


        color:
        {
            bsonType:"string",
            minLength:2
        },


        usuarioId:
        {
            bsonType:"objectId"
        }

    }

};





// ======================================================
// SCHEMA SEDES
// ======================================================


const sedesSchema = {

    bsonType:"object",


    required:[
        "nombre",
        "direccion",
        "capacidadTotal",
        "estado"
    ],


    additionalProperties:false,


    properties:{


        nombre:
        {
            bsonType:"string",
            minLength:3
        },


        direccion:
        {
            bsonType:"string",
            minLength:5
        },


        capacidadTotal:
        {
            bsonType:"int",
            minimum:1
        },


        estado:
        {
            bsonType:"string",
            enum:ESTADOS_ACTIVIDAD
        }

    }

};





// ======================================================
// SCHEMA ZONAS
// ======================================================


const zonasSchema = {


    bsonType:"object",


    required:[
        "sedeId",
        "nombre",
        "tipoZona",
        "capacidad",
        "cuposDisponibles",
        "tiposVehiculoPermitidos",
        "tarifa",
        "estado"
    ],


    additionalProperties:false,


    properties:{


        sedeId:
        {
            bsonType:"objectId"
        },


        nombre:
        {
            bsonType:"string",
            minLength:2
        },


        tipoZona:
        {
            bsonType:"string",
            minLength:2
        },


        capacidad:
        {
            bsonType:"int",
            minimum:1
        },


        cuposDisponibles:
        {
            bsonType:"int",
            minimum:0
        },


        tiposVehiculoPermitidos:
        {
            bsonType:"array",

            minItems:1,

            items:
            {
                bsonType:"string",
                enum:TIPOS_VEHICULO
            }
        },


        tarifa:
        {
            bsonType:"decimal",
            minimum:0
        },


        estado:
        {
            bsonType:"string",
            enum:ESTADOS_ACTIVIDAD
        }

    }

};

// ======================================================
// SCHEMA PARQUEOS
// ======================================================


const parqueosSchema = {

    bsonType:"object",


    required:[

        "vehiculoId",
        "usuarioId",
        "sedeId",
        "zonaId",
        "placaSnapshot",
        "tipoVehiculoSnapshot",
        "fechaIngreso",
        "estado"

    ],


    additionalProperties:false,


    properties:{


        vehiculoId:
        {
            bsonType:"objectId"
        },


        usuarioId:
        {
            bsonType:"objectId"
        },


        sedeId:
        {
            bsonType:"objectId"
        },


        zonaId:
        {
            bsonType:"objectId"
        },


        placaSnapshot:
        {
            bsonType:"string",
            minLength:3
        },


        tipoVehiculoSnapshot:
        {
            bsonType:"string",
            enum:TIPOS_VEHICULO
        },


        fechaIngreso:
        {
            bsonType:"date"
        },


        fechaSalida:
        {
            bsonType:"date"
        },


        estado:
        {
            bsonType:"string",
            enum:ESTADOS_PARQUEO
        },


        tiempoTotal:
        {
            bsonType:"int",
            minimum:0
        },


        costoTotal:
        {
            bsonType:"decimal",
            minimum:0
        }

    }

};





// ======================================================
// CREACIÓN DE COLECCIONES
// ======================================================


crearColeccion(
    "usuarios",
    usuariosSchema
);


crearColeccion(
    "vehiculos",
    vehiculosSchema
);


crearColeccion(
    "sedes",
    sedesSchema
);


crearColeccion(
    "zonas",
    zonasSchema
);


crearColeccion(
    "parqueos",
    parqueosSchema
);





// ======================================================
// ÍNDICES
// ======================================================


// ======================================================
// USUARIOS
// ======================================================


db.usuarios.createIndex(
    {
        documento:1
    },
    {
        unique:true
    }
);


db.usuarios.createIndex(
    {
        correo:1
    },
    {
        unique:true
    }
);


db.usuarios.createIndex(
    {
        rol:1
    }
);


db.usuarios.createIndex(
    {
        estado:1
    }
);





// ======================================================
// VEHICULOS
// ======================================================


db.vehiculos.createIndex(
    {
        placa:1
    },
    {
        unique:true
    }
);


db.vehiculos.createIndex(
    {
        usuarioId:1
    }
);





// ======================================================
// SEDES
// ======================================================


db.sedes.createIndex(
    {
        nombre:1
    },
    {
        unique:true
    }
);


db.sedes.createIndex(
    {
        estado:1
    }
);





// ======================================================
// ZONAS
// ======================================================


db.zonas.createIndex(
    {
        sedeId:1
    }
);


db.zonas.createIndex(
    {
        estado:1
    }
);


// Índice compuesto para consultar zonas activas por sede

db.zonas.createIndex(
    {
        sedeId:1,
        estado:1
    }
);





// ======================================================
// PARQUEOS
// ======================================================


db.parqueos.createIndex(
    {
        vehiculoId:1
    }
);


db.parqueos.createIndex(
    {
        usuarioId:1
    }
);


db.parqueos.createIndex(
    {
        sedeId:1
    }
);


db.parqueos.createIndex(
    {
        zonaId:1
    }
);


db.parqueos.createIndex(
    {
        fechaIngreso:1
    }
);


db.parqueos.createIndex(
    {
        estado:1
    }
);


// Ocupación por sede

db.parqueos.createIndex(
    {
        sedeId:1,
        estado:1
    }
);


// Vehículos activos por zona

db.parqueos.createIndex(
    {
        zonaId:1,
        estado:1
    }
);





// ======================================================
// FINALIZACIÓN
// ======================================================


print(
    "Configuración de Parqueaderos Multisede completada correctamente"
);