// Bloque 11 — Schema de zonas

// Colección: zonas
const zonasSchema = {

    bsonType: "object",

    required: [
        "sedeId",
        "nombre",
        "capacidad",
        "estado"
    ],

    properties: {

        _id: {
            bsonType: "objectId",
            description: "Identificador único generado por MongoDB"
        },


        sedeId: {
            bsonType: "objectId",
            description: "Referencia a la sede donde pertenece la zona"
        },


        nombre: {
            bsonType: "string",
            description: "Nombre identificador de la zona"
        },


        descripcion: {
            bsonType: "string",
            description: "Descripción opcional de la zona"
        },


        capacidad: {
            bsonType: "int",
            minimum: 0,
            description: "Cantidad máxima de espacios de parqueo en la zona"
        },


        estado: {
            bsonType: "string",
            enum: ESTADOS_ZONA,
            description: "Estado operativo de la zona"
        },


        fechaRegistro: {
            bsonType: "date",
            description: "Fecha de creación del registro"
        }

    }
};

// Bloque 12 — Creación colección zonas

// collection: zonas

db.createCollection("zonas", {
    validator: {
        $jsonSchema: zonasSchema
    },

    validationLevel: "strict",

    validationAction: "error"
});

// Bloque 13 — Índices colección zonas

// Índices colección zonas

db.zonas.createIndex(
    {
        sedeId: 1,
        nombre: 1
    },
    {
        unique: true
    }
);


// Índice para búsquedas por sede

db.zonas.createIndex(
    {
        sedeId: 1
    }
);


// Índice para filtrar zonas por estado

db.zonas.createIndex(
    {
        estado: 1
    }
);

