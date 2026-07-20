// Bloque 5 — Schema de vehiculos

// La colección vehiculos representa los vehículos registrados en el sistema y su relación con el propietario (usuarioId).

// Colección: vehiculos

const vehiculosSchema = {

    bsonType: "object",

    required: [
        "usuarioId",
        "placa",
        "tipoVehiculo",
        "marca",
        "modelo",
        "estado"
    ],

    properties: {

        _id: {
            bsonType: "objectId",
            description: "Identificador único generado por MongoDB"
        },


        usuarioId: {
            bsonType: "objectId",
            description: "Referencia al usuario propietario del vehículo"
        },


        placa: {
            bsonType: "string",
            description: "Placa única del vehículo"
        },


        tipoVehiculo: {
            bsonType: "string",
            description: "Tipo de vehículo registrado"
        },


        marca: {
            bsonType: "string",
            description: "Marca del vehículo"
        },


        modelo: {
            bsonType: "string",
            description: "Modelo del vehículo"
        },


        color: {
            bsonType: "string",
            description: "Color del vehículo"
        },


        estado: {
            bsonType: "string",
            enum: [
                "ACTIVO",
                "INACTIVO"
            ],
            description: "Estado actual del vehículo"
        },


        fechaRegistro: {
            bsonType: "date",
            description: "Fecha de registro del vehículo"
        }

    }
};

// Bloque 6 — Creación colección vehiculos

// Usamos el vehiculosSchema definido anteriormente.

// Colección: vehiculos

db.createCollection(
    "vehiculos",
    {
        validator: {
            $jsonSchema: vehiculosSchema
        },

        validationLevel: "strict",

        validationAction: "error"
    });


// Bloque 7 — Índices colección vehiculos

// 5. Índices colección vehiculos
// =====================================

// Índice único para placa
// Evita registrar dos vehículos con la misma placa

db.vehiculos.createIndex(
    {
        placa: 1
    },
    {
        unique: true
    }
);


// Índice para búsquedas por propietario

db.vehiculos.createIndex(
    {
        usuarioId: 1
    }
);


// Índice para filtrar vehículos activos/inactivos

db.vehiculos.createIndex(
    {
        estado: 1
    }
);