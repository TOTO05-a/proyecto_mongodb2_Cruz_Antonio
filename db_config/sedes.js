// Bloque 8 Schema de sedes

// Colección: sedes

const sedesSchema = {

    bsonType: "object",

    required: [
        "nombre",
        "direccion",
        "estado"
    ],

    properties: {

        _id: {
            bsonType: "objectId",
            description: "Identificador único generado por MongoDB"
        },


        nombre: {
            bsonType: "string",
            description: "Nombre identificador de la sede"
        },


        direccion: {
            bsonType: "string",
            description: "Ubicación física de la sede"
        },


        telefono: {
            bsonType: "string",
            description: "Número de contacto de la sede"
        },


        capacidadTotal: {
            bsonType: "int",
            minimum: 0,
            description: "Cantidad máxima de espacios disponibles"
        },


        estado: {
            bsonType: "string",
            enum: ESTADOS_SEDE,
            description: "Estado operativo de la sede"
        },


        fechaRegistro: {
            bsonType: "date",
            description: "Fecha de creación del registro"
        }

    }
};

// Bloque 9 Creación colección sedes

// collection: sedes

db.createCollection("sedes", {

    validator: {
        $jsonSchema: sedesSchema
    },

    validationLevel: "strict",

    validationAction: "error"
});

// Bloque 10 Índices colección sedes
// =====================================

// 5. Índices colección sedes

// Índice único para nombre de sede
// Evita registrar dos sedes con el mismo nombre

db.sedes.createIndex(
    {
        nombre: 1
    },
    {
        unique: true
    }
);


// Índice para búsquedas por estado

db.sedes.createIndex(
    {
        estado: 1
    }
);
