// coleccion 5 parqueos

//Bloque 14 — Schema de parqueos

// Colección: parqueos
const parqueosSchema = {

    bsonType: "object",

    required: [
        "sedeId",
        "zonaId",
        "codigo",
        "estado"
    ],

    properties: {

        _id: {
            bsonType: "objectId",
            description: "Identificador único generado por MongoDB"
        },


        sedeId: {
            bsonType: "objectId",
            description: "Referencia a la sede donde se encuentra el parqueo"
        },


        zonaId: {
            bsonType: "objectId",
            description: "Referencia a la zona donde pertenece el parqueo"
        },


        codigo: {
            bsonType: "string",
            description: "Código identificador del espacio de parqueo"
        },


        tipoParqueo: {
            bsonType: "string",
            description: "Tipo de espacio disponible"
        },


        estado: {
            bsonType: "string",
            enum: ESTADOS_PARQUEO,
            description: "Estado actual del espacio de parqueo"
        },


        vehiculoId: {
            bsonType: "objectId",
            description: "Vehículo actualmente asignado al parqueo"
        },


        fechaIngreso: {
            bsonType: "date",
            description: "Fecha y hora de ocupación del parqueo"
        },


        fechaSalida: {
            bsonType: "date",
            description: "Fecha y hora de liberación del parqueo"
        }

    }
};

// Bloque 15 — Creación colección parqueos

// Usamos el parqueosSchema definido anteriormente.

// Colección: parqueos

db.createCollection(
    "parqueos",
    {
        validator: {
            $jsonSchema: parqueosSchema
        },

        validationLevel: "strict",

        validationAction: "error"
    }
);

// Bloque 16 — Índices colección parqueos

// Índices colección parqueos
// Índice compuesto:
// evita tener dos espacios con el mismo código dentro de una misma zona

db.parqueos.createIndex(
    {
        zonaId: 1,
        codigo: 1
    },
    {
        unique: true
    }
);


// Índice para búsquedas por sede

db.parqueos.createIndex(
    {
        sedeId: 1
    }
);


// Índice para búsquedas por zona

db.parqueos.createIndex(
    {
        zonaId: 1
    }
);


// Índice para consultar disponibilidad del parqueo

db.parqueos.createIndex(
    {
        estado: 1
    }
);


// Índice para localizar parqueos ocupados por vehículo

db.parqueos.createIndex(
    {
        vehiculoId: 1
    }
);