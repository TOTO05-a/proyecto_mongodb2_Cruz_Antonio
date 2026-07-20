// La estructura correcta es:

// use parqueaderosMultisede;

// constantes

// schemas usuarios, vehiculos, sedes, zonas, parqueos

// createCollection usuarios
// createCollection vehiculos
// createCollection sedes
// createCollection zonas
// createCollection parqueos

// Bloque 1 — Selección de base de datos y constantes ENUM
// 1. Selección de base de datos
// use parqueaderosMultisede;

// =====================================
// 2. Constantes ENUM
// =====================================


// Roles disponibles del sistema

const ROLES = [
    "ADMIN",
    "EMPLEADO",
    "CLIENTE"
];


// Estados posibles de usuarios

const ESTADOS_USUARIO = [
    "ACTIVO",
    "INACTIVO"
];


// Estados posibles de sedes

const ESTADOS_SEDE = [
    "ACTIVA",
    "INACTIVA"
];


// Estados posibles de zonas

const ESTADOS_ZONA = [
    "DISPONIBLE",
    "MANTENIMIENTO",
    "INACTIVA"
];

// Estados posibles de espacios de parqueo
const ESTADOS_PARQUEO = [
    "LIBRE",
    "OCUPADO",
    "MANTENIMIENTO"
];



//======= USUARIOS =======

const usuariosSchema = {
    bsonType: "object",
    required: [],
    properties: {}
};

db.createCollection("usuarios", {
    validator: {
        $jsonSchema: usuariosSchema
    },
    validationLevel: "strict",
    validationAction: "error"
});



//Bloque 2 — Schema de usuarios
// =====================================
// 3. Schemas USUARIOS
// =====================================


// =====================================
// Colección: usuarios
// =====================================

const usuariosSchema = {
    bsonType: "object",

    required: [
        "nombre",
        "correo",
        "rol",
        "estado",
        "fechaRegistro"
    ],

    properties: {

        _id: {
            bsonType: "objectId", 
            description: "Identificador único generado por MongoDB"
        },


        nombre: {
            bsonType: "string",
            description: "Nombre completo del usuario"

        },
        correo: {
            bsonType: "string",
            description: "Correo electrónico único del usuario"
        },


        telefono: {

            bsonType: "string",
            description: "Número telefónico del usuario"
        },


        rol: {
            bsonType: "string",
            enum: ROLES,
            description: "Rol asignado dentro del sistema"
        },


        estado: {
            bsonType: "string",
            enum: ESTADOS_USUARIO,
            description: "Estado actual del usuario"
        },


        fechaRegistro: {
            bsonType: "date",
            description: "Fecha de creación del registro"
        }
    }
};

//Bloque 3 — Creación colección usuarios
// =====================================
// 4. Creación de colecciones
// =====================================


// =====================================
// Colección: usuarios
// =====================================

db.createCollection("usuarios", {

    validator: {
        $jsonSchema: usuariosSchema
        
    },

    validationLevel: "strict",

    validationAction: "error"
});

// Bloque 4 — Índices colección usuarios
// =====================================
// 5. Índices colección usuarios
// =====================================

db.usuarios.createIndex({
    correo: 1
}, {
    unique: true
}); 
// Indice para busquedas por rol
db.usuarios.createIndex({
    rol: 1
});
// Índice para filtrar usuarios activos/inactivos
db.usuarios.createIndex({
    estado: 1
});

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

