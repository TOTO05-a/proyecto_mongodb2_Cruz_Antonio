// Bloque 1 — Selección de base de datos y constantes ENUM
// Proyecto: Parqueaderos Multisede
// Objetivo: Configuración inicial MongoDB



// =====================================
// 1. Selección de base de datos
// =====================================

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

