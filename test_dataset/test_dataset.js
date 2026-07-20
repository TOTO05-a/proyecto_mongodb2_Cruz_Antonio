// Archivo: test_dataset.js
// Objetivo:
// Poblar la base de datos con datos de prueba reales

use("parqueaderosMultisede");
// LIMPIEZA DE COLECCIONES
db.parqueos.deleteMany({});
db.vehiculos.deleteMany({});
db.zonas.deleteMany({});
db.usuarios.deleteMany({});
db.sedes.deleteMany({});

print("Colecciones limpiadas correctamente.");

// OBJECTID - SEDES
const sedeCentralId = new ObjectId();
const sedeOccidenteId = new ObjectId();
const sedeOrienteId = new ObjectId();

// OBJECTID - EMPLEADOS
const empleado1Id = new ObjectId();
const empleado2Id = new ObjectId();
const empleado3Id = new ObjectId();
const empleado4Id = new ObjectId();
const empleado5Id = new ObjectId();
const empleado6Id = new ObjectId();
const empleado7Id = new ObjectId();
const empleado8Id = new ObjectId();
const empleado9Id = new ObjectId();
const empleado10Id = new ObjectId();

// OBJECTID - CLIENTES
const cliente1Id = new ObjectId();
const cliente2Id = new ObjectId();
const cliente3Id = new ObjectId();
const cliente4Id = new ObjectId();
const cliente5Id = new ObjectId();
const cliente6Id = new ObjectId();
const cliente7Id = new ObjectId();
const cliente8Id = new ObjectId();
const cliente9Id = new ObjectId();
const cliente10Id = new ObjectId();
const cliente11Id = new ObjectId();
const cliente12Id = new ObjectId();
const cliente13Id = new ObjectId();
const cliente14Id = new ObjectId();
const cliente15Id = new ObjectId();

// OBJECTID - ZONAS
const zonaCentralAId = new ObjectId();
const zonaCentralBId = new ObjectId();
const zonaCentralCId = new ObjectId();
const zonaCentralDId = new ObjectId();
const zonaCentralEId = new ObjectId();

const zonaOccidenteAId = new ObjectId();
const zonaOccidenteBId = new ObjectId();
const zonaOccidenteCId = new ObjectId();
const zonaOccidenteDId = new ObjectId();
const zonaOccidenteEId = new ObjectId();

const zonaOrienteAId = new ObjectId();
const zonaOrienteBId = new ObjectId();
const zonaOrienteCId = new ObjectId();
const zonaOrienteDId = new ObjectId();
const zonaOrienteEId = new ObjectId();

// OBJECTID - VEHÍCULOS
const vehiculo1Id = new ObjectId();
const vehiculo2Id = new ObjectId();
const vehiculo3Id = new ObjectId();
const vehiculo4Id = new ObjectId();
const vehiculo5Id = new ObjectId();
const vehiculo6Id = new ObjectId();
const vehiculo7Id = new ObjectId();
const vehiculo8Id = new ObjectId();
const vehiculo9Id = new ObjectId();
const vehiculo10Id = new ObjectId();

const vehiculo11Id = new ObjectId();
const vehiculo12Id = new ObjectId();
const vehiculo13Id = new ObjectId();
const vehiculo14Id = new ObjectId();
const vehiculo15Id = new ObjectId();
const vehiculo16Id = new ObjectId();
const vehiculo17Id = new ObjectId();
const vehiculo18Id = new ObjectId();
const vehiculo19Id = new ObjectId();
const vehiculo20Id = new ObjectId();

const vehiculo21Id = new ObjectId();
const vehiculo22Id = new ObjectId();
const vehiculo23Id = new ObjectId();
const vehiculo24Id = new ObjectId();
const vehiculo25Id = new ObjectId();
const vehiculo26Id = new ObjectId();
const vehiculo27Id = new ObjectId();
const vehiculo28Id = new ObjectId();
const vehiculo29Id = new ObjectId();
const vehiculo30Id = new ObjectId();

// INSERCIÓN DE SEDES
db.sedes.insertMany([
    {
        _id: sedeCentralId,
        nombre: "Sede Central",
        direccion: "Zona 10, Ciudad de Guatemala",
        capacidadTotal: 250,
        estado: "ACTIVA"
    },
    {
        _id: sedeOccidenteId,
        nombre: "Sede Occidente",
        direccion: "Zona 3, Quetzaltenango",
        capacidadTotal: 180,
        estado: "ACTIVA"
    },
    {
        _id: sedeOrienteId,
        nombre: "Sede Oriente",
        direccion: "Barrio El Centro, Zacapa",
        capacidadTotal: 150,
        estado: "ACTIVA"
    }
]);

print("Sedes insertadas correctamente.");

// INSERCIÓN DE USUARIOS
db.usuarios.insertMany([

    // ==========================
    // EMPLEADOS
    // ==========================

    {
        _id: empleado1Id,
        nombreCompleto: "Carlos Hernández",
        documento: "100000001",
        correo: "carlos.hernandez@campusparking.com",
        telefono: "40010001",
        rol: "EMPLEADO",
        estado: "ACTIVO"
    },

    {
        _id: empleado2Id,
        nombreCompleto: "María López",
        documento: "100000002",
        correo: "maria.lopez@campusparking.com",
        telefono: "40010002",
        rol: "EMPLEADO",
        estado: "ACTIVO"
    },

    {
        _id: empleado3Id,
        nombreCompleto: "Luis Morales",
        documento: "100000003",
        correo: "luis.morales@campusparking.com",
        telefono: "40010003",
        rol: "EMPLEADO",
        estado: "ACTIVO"
    },

    {
        _id: empleado4Id,
        nombreCompleto: "Andrea Castillo",
        documento: "100000004",
        correo: "andrea.castillo@campusparking.com",
        telefono: "40010004",
        rol: "EMPLEADO",
        estado: "ACTIVO"
    },

    {
        _id: empleado5Id,
        nombreCompleto: "José Pérez",
        documento: "100000005",
        correo: "jose.perez@campusparking.com",
        telefono: "40010005",
        rol: "EMPLEADO",
        estado: "ACTIVO"
    },

    {
        _id: empleado6Id,
        nombreCompleto: "Sofía Ramírez",
        documento: "100000006",
        correo: "sofia.ramirez@campusparking.com",
        telefono: "40010006",
        rol: "EMPLEADO",
        estado: "ACTIVO"
    },

    {
        _id: empleado7Id,
        nombreCompleto: "Miguel García",
        documento: "100000007",
        correo: "miguel.garcia@campusparking.com",
        telefono: "40010007",
        rol: "EMPLEADO",
        estado: "ACTIVO"
    },

    {
        _id: empleado8Id,
        nombreCompleto: "Daniela Méndez",
        documento: "100000008",
        correo: "daniela.mendez@campusparking.com",
        telefono: "40010008",
        rol: "EMPLEADO",
        estado: "ACTIVO"
    },

    {
        _id: empleado9Id,
        nombreCompleto: "Fernando Ruiz",
        documento: "100000009",
        correo: "fernando.ruiz@campusparking.com",
        telefono: "40010009",
        rol: "EMPLEADO",
        estado: "ACTIVO"
    },

    {
        _id: empleado10Id,
        nombreCompleto: "Paola Gómez",
        documento: "100000010",
        correo: "paola.gomez@campusparking.com",
        telefono: "40010010",
        rol: "EMPLEADO",
        estado: "ACTIVO"
    },

    // ==========================
    // CLIENTES
    // ==========================

    {
        _id: cliente1Id,
        nombreCompleto: "Juan Pérez",
        documento: "200000001",
        correo: "juan.perez@email.com",
        telefono: "50020001",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente2Id,
        nombreCompleto: "Ana López",
        documento: "200000002",
        correo: "ana.lopez@email.com",
        telefono: "50020002",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente3Id,
        nombreCompleto: "Pedro Martínez",
        documento: "200000003",
        correo: "pedro.martinez@email.com",
        telefono: "50020003",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente4Id,
        nombreCompleto: "Laura Gómez",
        documento: "200000004",
        correo: "laura.gomez@email.com",
        telefono: "50020004",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente5Id,
        nombreCompleto: "Ricardo Castillo",
        documento: "200000005",
        correo: "ricardo.castillo@email.com",
        telefono: "50020005",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

        {
        _id: cliente6Id,
        nombreCompleto: "Gabriela Morales",
        documento: "200000006",
        correo: "gabriela.morales@email.com",
        telefono: "50020006",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente7Id,
        nombreCompleto: "Kevin Hernández",
        documento: "200000007",
        correo: "kevin.hernandez@email.com",
        telefono: "50020007",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente8Id,
        nombreCompleto: "Natalia Ramírez",
        documento: "200000008",
        correo: "natalia.ramirez@email.com",
        telefono: "50020008",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente9Id,
        nombreCompleto: "Diego Fernández",
        documento: "200000009",
        correo: "diego.fernandez@email.com",
        telefono: "50020009",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente10Id,
        nombreCompleto: "Valeria Méndez",
        documento: "200000010",
        correo: "valeria.mendez@email.com",
        telefono: "50020010",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente11Id,
        nombreCompleto: "Esteban Ruiz",
        documento: "200000011",
        correo: "esteban.ruiz@email.com",
        telefono: "50020011",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente12Id,
        nombreCompleto: "Carolina Díaz",
        documento: "200000012",
        correo: "carolina.diaz@email.com",
        telefono: "50020012",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente13Id,
        nombreCompleto: "Javier Soto",
        documento: "200000013",
        correo: "javier.soto@email.com",
        telefono: "50020013",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente14Id,
        nombreCompleto: "Patricia Herrera",
        documento: "200000014",
        correo: "patricia.herrera@email.com",
        telefono: "50020014",
        rol: "CLIENTE",
        estado: "ACTIVO"
    },

    {
        _id: cliente15Id,
        nombreCompleto: "Alejandro Castro",
        documento: "200000015",
        correo: "alejandro.castro@email.com",
        telefono: "50020015",
        rol: "CLIENTE",
        estado: "ACTIVO"
    }

]);

print("Usuarios insertados correctamente.");

// FIN DEL BLOQUE 1
print("Bloque 1 completado correctamente.");

// BLOQUE 2
// INSERCIÓN DE ZONAS

db.zonas.insertMany([

    // ==========================================
    // SEDE CENTRAL
    // ==========================================

    {
        _id: zonaCentralAId,
        sedeId: sedeCentralId,
        nombre: "Zona A",
        tipoZona: "GENERAL",
        capacidad: 50,
        cuposDisponibles: 50,
        tiposVehiculoPermitidos: [
            "AUTOMOVIL",
            "MOTOCICLETA"
        ],
        tarifa: NumberDecimal("15.00"),
        estado: "ACTIVA"
    },

    {
        _id: zonaCentralBId,
        sedeId: sedeCentralId,
        nombre: "Zona B",
        tipoZona: "GENERAL",
        capacidad: 40,
        cuposDisponibles: 40,
        tiposVehiculoPermitidos: [
            "AUTOMOVIL"
        ],
        tarifa: NumberDecimal("18.00"),
        estado: "ACTIVA"
    },

    {
        _id: zonaCentralCId,
        sedeId: sedeCentralId,
        nombre: "Zona C",
        tipoZona: "MOTOS",
        capacidad: 30,
        cuposDisponibles: 30,
        tiposVehiculoPermitidos: [
            "MOTOCICLETA"
        ],
        tarifa: NumberDecimal("8.00"),
        estado: "ACTIVA"
    },

    {
        _id: zonaCentralDId,
        sedeId: sedeCentralId,
        nombre: "Zona D",
        tipoZona: "BICICLETAS",
        capacidad: 20,
        cuposDisponibles: 20,
        tiposVehiculoPermitidos: [
            "BICICLETA"
        ],
        tarifa: NumberDecimal("3.00"),
        estado: "ACTIVA"
    },

    {
        _id: zonaCentralEId,
        sedeId: sedeCentralId,
        nombre: "Zona E",
        tipoZona: "PESADOS",
        capacidad: 10,
        cuposDisponibles: 10,
        tiposVehiculoPermitidos: [
            "CAMION"
        ],
        tarifa: NumberDecimal("35.00"),
        estado: "ACTIVA"
    },

    // ==========================================
    // SEDE OCCIDENTE
    // ==========================================

    {
        _id: zonaOccidenteAId,
        sedeId: sedeOccidenteId,
        nombre: "Zona A",
        tipoZona: "GENERAL",
        capacidad: 40,
        cuposDisponibles: 40,
        tiposVehiculoPermitidos: [
            "AUTOMOVIL",
            "MOTOCICLETA"
        ],
        tarifa: NumberDecimal("14.00"),
        estado: "ACTIVA"
    },

    {
        _id: zonaOccidenteBId,
        sedeId: sedeOccidenteId,
        nombre: "Zona B",
        tipoZona: "GENERAL",
        capacidad: 35,
        cuposDisponibles: 35,
        tiposVehiculoPermitidos: [
            "AUTOMOVIL"
        ],
        tarifa: NumberDecimal("17.00"),
        estado: "ACTIVA"
    },

    {
        _id: zonaOccidenteCId,
        sedeId: sedeOccidenteId,
        nombre: "Zona C",
        tipoZona: "MOTOS",
        capacidad: 25,
        cuposDisponibles: 25,
        tiposVehiculoPermitidos: [
            "MOTOCICLETA"
        ],
        tarifa: NumberDecimal("7.00"),
        estado: "ACTIVA"
    },

    {
        _id: zonaOccidenteDId,
        sedeId: sedeOccidenteId,
        nombre: "Zona D",
        tipoZona: "BICICLETAS",
        capacidad: 18,
        cuposDisponibles: 18,
        tiposVehiculoPermitidos: [
            "BICICLETA"
        ],
        tarifa: NumberDecimal("3.00"),
        estado: "ACTIVA"
    },

    {
        _id: zonaOccidenteEId,
        sedeId: sedeOccidenteId,
        nombre: "Zona E",
        tipoZona: "PESADOS",
        capacidad: 8,
        cuposDisponibles: 8,
        tiposVehiculoPermitidos: [
            "CAMION"
        ],
        tarifa: NumberDecimal("32.00"),
        estado: "ACTIVA"
    },

    // ==========================================
    // SEDE ORIENTE
    // ==========================================

    {
        _id: zonaOrienteAId,
        sedeId: sedeOrienteId,
        nombre: "Zona A",
        tipoZona: "GENERAL",
        capacidad: 35,
        cuposDisponibles: 35,
        tiposVehiculoPermitidos: [
            "AUTOMOVIL",
            "MOTOCICLETA"
        ],
        tarifa: NumberDecimal("13.00"),
        estado: "ACTIVA"
    },

    {
        _id: zonaOrienteBId,
        sedeId: sedeOrienteId,
        nombre: "Zona B",
        tipoZona: "GENERAL",
        capacidad: 30,
        cuposDisponibles: 30,
        tiposVehiculoPermitidos: [
            "AUTOMOVIL"
        ],
        tarifa: NumberDecimal("16.00"),
        estado: "ACTIVA"
    },

    {
        _id: zonaOrienteCId,
        sedeId: sedeOrienteId,
        nombre: "Zona C",
        tipoZona: "MOTOS",
        capacidad: 20,
        cuposDisponibles: 20,
        tiposVehiculoPermitidos: [
            "MOTOCICLETA"
        ],
        tarifa: NumberDecimal("6.00"),
        estado: "ACTIVA"
    },

    {
        _id: zonaOrienteDId,
        sedeId: sedeOrienteId,
        nombre: "Zona D",
        tipoZona: "BICICLETAS",
        capacidad: 15,
        cuposDisponibles: 15,
        tiposVehiculoPermitidos: [
            "BICICLETA"
        ],
        tarifa: NumberDecimal("2.50"),
        estado: "ACTIVA"
    },

    {
        _id: zonaOrienteEId,
        sedeId: sedeOrienteId,
        nombre: "Zona E",
        tipoZona: "PESADOS",
        capacidad: 6,
        cuposDisponibles: 6,
        tiposVehiculoPermitidos: [
            "CAMION"
        ],
        tarifa: NumberDecimal("30.00"),
        estado: "ACTIVA"
    }

]);

print("Zonas insertadas correctamente.");


// INSERCIÓN DE VEHÍCULOS

db.vehiculos.insertMany([

    {
        _id: vehiculo1Id,
        placa: "P100ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Toyota",
        modelo: "Corolla",
        color: "Blanco",
        usuarioId: cliente1Id
    },

    {
        _id: vehiculo2Id,
        placa: "P101ABC",
        tipoVehiculo: "MOTOCICLETA",
        marca: "Honda",
        modelo: "CB190R",
        color: "Negro",
        usuarioId: cliente1Id
    },

    {
        _id: vehiculo3Id,
        placa: "P102ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Hyundai",
        modelo: "Accent",
        color: "Gris",
        usuarioId: cliente2Id
    },

    {
        _id: vehiculo4Id,
        placa: "P103ABC",
        tipoVehiculo: "BICICLETA",
        marca: "Trek",
        modelo: "Marlin 5",
        color: "Azul",
        usuarioId: cliente2Id
    },

    {
        _id: vehiculo5Id,
        placa: "P104ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Mazda",
        modelo: "3",
        color: "Rojo",
        usuarioId: cliente3Id
    },
        {
        _id: vehiculo6Id,
        placa: "P105ABC",
        tipoVehiculo: "MOTOCICLETA",
        marca: "Yamaha",
        modelo: "FZ",
        color: "Azul",
        usuarioId: cliente3Id
    },

    {
        _id: vehiculo7Id,
        placa: "P106ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Kia",
        modelo: "Rio",
        color: "Plata",
        usuarioId: cliente4Id
    },

    {
        _id: vehiculo8Id,
        placa: "P107ABC",
        tipoVehiculo: "CAMION",
        marca: "Isuzu",
        modelo: "NPR",
        color: "Blanco",
        usuarioId: cliente4Id
    },

    {
        _id: vehiculo9Id,
        placa: "P108ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Nissan",
        modelo: "Versa",
        color: "Negro",
        usuarioId: cliente5Id
    },

    {
        _id: vehiculo10Id,
        placa: "P109ABC",
        tipoVehiculo: "MOTOCICLETA",
        marca: "Suzuki",
        modelo: "Gixxer",
        color: "Rojo",
        usuarioId: cliente5Id
    },

    {
        _id: vehiculo11Id,
        placa: "P110ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Chevrolet",
        modelo: "Onix",
        color: "Gris",
        usuarioId: cliente6Id
    },

    {
        _id: vehiculo12Id,
        placa: "P111ABC",
        tipoVehiculo: "BICICLETA",
        marca: "Specialized",
        modelo: "Rockhopper",
        color: "Negro",
        usuarioId: cliente6Id
    },

    {
        _id: vehiculo13Id,
        placa: "P112ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Volkswagen",
        modelo: "Jetta",
        color: "Blanco",
        usuarioId: cliente7Id
    },

    {
        _id: vehiculo14Id,
        placa: "P113ABC",
        tipoVehiculo: "MOTOCICLETA",
        marca: "Bajaj",
        modelo: "Pulsar NS200",
        color: "Azul",
        usuarioId: cliente7Id
    },

    {
        _id: vehiculo15Id,
        placa: "P114ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Ford",
        modelo: "Focus",
        color: "Rojo",
        usuarioId: cliente8Id
    },

    {
        _id: vehiculo16Id,
        placa: "P115ABC",
        tipoVehiculo: "CAMION",
        marca: "Hino",
        modelo: "300",
        color: "Blanco",
        usuarioId: cliente8Id
    },

    {
        _id: vehiculo17Id,
        placa: "P116ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Toyota",
        modelo: "Yaris",
        color: "Azul",
        usuarioId: cliente9Id
    },

    {
        _id: vehiculo18Id,
        placa: "P117ABC",
        tipoVehiculo: "MOTOCICLETA",
        marca: "KTM",
        modelo: "Duke 200",
        color: "Naranja",
        usuarioId: cliente9Id
    },

    {
        _id: vehiculo19Id,
        placa: "P118ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Honda",
        modelo: "Civic",
        color: "Plata",
        usuarioId: cliente10Id
    },

    {
        _id: vehiculo20Id,
        placa: "P119ABC",
        tipoVehiculo: "BICICLETA",
        marca: "Scott",
        modelo: "Aspect",
        color: "Verde",
        usuarioId: cliente10Id
    },

    {
        _id: vehiculo21Id,
        placa: "P120ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Mazda",
        modelo: "CX-5",
        color: "Negro",
        usuarioId: cliente11Id
    },

    {
        _id: vehiculo22Id,
        placa: "P121ABC",
        tipoVehiculo: "MOTOCICLETA",
        marca: "Honda",
        modelo: "XR190L",
        color: "Rojo",
        usuarioId: cliente11Id
    },

    {
        _id: vehiculo23Id,
        placa: "P122ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Hyundai",
        modelo: "Elantra",
        color: "Blanco",
        usuarioId: cliente12Id
    },

    {
        _id: vehiculo24Id,
        placa: "P123ABC",
        tipoVehiculo: "CAMION",
        marca: "Fuso",
        modelo: "Canter",
        color: "Gris",
        usuarioId: cliente12Id
    },

    {
        _id: vehiculo25Id,
        placa: "P124ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Kia",
        modelo: "Sportage",
        color: "Azul",
        usuarioId: cliente13Id
    },

    {
        _id: vehiculo26Id,
        placa: "P125ABC",
        tipoVehiculo: "MOTOCICLETA",
        marca: "Yamaha",
        modelo: "MT-03",
        color: "Negro",
        usuarioId: cliente13Id
    },

    {
        _id: vehiculo27Id,
        placa: "P126ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Nissan",
        modelo: "Sentra",
        color: "Rojo",
        usuarioId: cliente14Id
    },

    {
        _id: vehiculo28Id,
        placa: "P127ABC",
        tipoVehiculo: "BICICLETA",
        marca: "Giant",
        modelo: "Talon",
        color: "Negro",
        usuarioId: cliente14Id
    },

    {
        _id: vehiculo29Id,
        placa: "P128ABC",
        tipoVehiculo: "AUTOMOVIL",
        marca: "Chevrolet",
        modelo: "Tracker",
        color: "Blanco",
        usuarioId: cliente15Id
    },

    {
        _id: vehiculo30Id,
        placa: "P129ABC",
        tipoVehiculo: "CAMION",
        marca: "Volvo",
        modelo: "FH",
        color: "Azul",
        usuarioId: cliente15Id
    }

]);

print("Vehículos insertados correctamente.");


// final de bloque 2

print("Bloque 2 completado correctamente.");


// bloque 3

// BLOQUE 3
// INSERCIÓN DE PARQUEOS

const parqueos = [];

// MAPA VEHÍCULO → USUARIO → DATOS SNAPSHOT

const vehiculosMapa = {
    [vehiculo1Id]: {
        usuarioId: cliente1Id,
        placa: "P100ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo2Id]: {
        usuarioId: cliente1Id,
        placa: "P101ABC",
        tipoVehiculo: "MOTOCICLETA"
    },
    [vehiculo3Id]: {
        usuarioId: cliente2Id,
        placa: "P102ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo4Id]: {
        usuarioId: cliente2Id,
        placa: "P103ABC",
        tipoVehiculo: "BICICLETA"
    },
    [vehiculo5Id]: {
        usuarioId: cliente3Id,
        placa: "P104ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo6Id]: {
        usuarioId: cliente3Id,
        placa: "P105ABC",
        tipoVehiculo: "MOTOCICLETA"
    },
    [vehiculo7Id]: {
        usuarioId: cliente4Id,
        placa: "P106ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo8Id]: {
        usuarioId: cliente4Id,
        placa: "P107ABC",
        tipoVehiculo: "CAMION"
    },
    [vehiculo9Id]: {
        usuarioId: cliente5Id,
        placa: "P108ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo10Id]: {
        usuarioId: cliente5Id,
        placa: "P109ABC",
        tipoVehiculo: "MOTOCICLETA"
    },
    [vehiculo11Id]: {
        usuarioId: cliente6Id,
        placa: "P110ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo12Id]: {
        usuarioId: cliente6Id,
        placa: "P111ABC",
        tipoVehiculo: "BICICLETA"
    },
    [vehiculo13Id]: {
        usuarioId: cliente7Id,
        placa: "P112ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo14Id]: {
        usuarioId: cliente7Id,
        placa: "P113ABC",
        tipoVehiculo: "MOTOCICLETA"
    },
    [vehiculo15Id]: {
        usuarioId: cliente8Id,
        placa: "P114ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo16Id]: {
        usuarioId: cliente8Id,
        placa: "P115ABC",
        tipoVehiculo: "CAMION"
    },
    [vehiculo17Id]: {
        usuarioId: cliente9Id,
        placa: "P116ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo18Id]: {
        usuarioId: cliente9Id,
        placa: "P117ABC",
        tipoVehiculo: "MOTOCICLETA"
    },
    [vehiculo19Id]: {
        usuarioId: cliente10Id,
        placa: "P118ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo20Id]: {
        usuarioId: cliente10Id,
        placa: "P119ABC",
        tipoVehiculo: "BICICLETA"
    },
    [vehiculo21Id]: {
        usuarioId: cliente11Id,
        placa: "P120ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo22Id]: {
        usuarioId: cliente11Id,
        placa: "P121ABC",
        tipoVehiculo: "MOTOCICLETA"
    },
    [vehiculo23Id]: {
        usuarioId: cliente12Id,
        placa: "P122ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo24Id]: {
        usuarioId: cliente12Id,
        placa: "P123ABC",
        tipoVehiculo: "CAMION"
    },
    [vehiculo25Id]: {
        usuarioId: cliente13Id,
        placa: "P124ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo26Id]: {
        usuarioId: cliente13Id,
        placa: "P125ABC",
        tipoVehiculo: "MOTOCICLETA"
    },
    [vehiculo27Id]: {
        usuarioId: cliente14Id,
        placa: "P126ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo28Id]: {
        usuarioId: cliente14Id,
        placa: "P127ABC",
        tipoVehiculo: "BICICLETA"
    },
    [vehiculo29Id]: {
        usuarioId: cliente15Id,
        placa: "P128ABC",
        tipoVehiculo: "AUTOMOVIL"
    },
    [vehiculo30Id]: {
        usuarioId: cliente15Id,
        placa: "P129ABC",
        tipoVehiculo: "CAMION"
    }
};


// DISTRIBUCIÓN REAL SEDE → ZONAS

const zonasPorSede = [
    {
        sedeId: sedeCentralId,
        zonas: [
            zonaCentralAId,
            zonaCentralBId,
            zonaCentralCId,
            zonaCentralDId,
            zonaCentralEId
        ]
    },
    {
        sedeId: sedeOccidenteId,
        zonas: [
            zonaOccidenteAId,
            zonaOccidenteBId,
            zonaOccidenteCId,
            zonaOccidenteDId,
            zonaOccidenteEId
        ]
    },
    {
        sedeId: sedeOrienteId,
        zonas: [
            zonaOrienteAId,
            zonaOrienteBId,
            zonaOrienteCId,
            zonaOrienteDId,
            zonaOrienteEId
        ]
    }
];

// PARQUEOS 1 - 25

parqueos.push(
    {
        vehiculoId: vehiculo1Id,
        usuarioId: cliente1Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralAId,
        placaSnapshot: "P100ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-01T08:00:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo2Id,
        usuarioId: cliente1Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralCId,
        placaSnapshot: "P101ABC",
        tipoVehiculoSnapshot: "MOTOCICLETA",
        fechaIngreso: new Date("2026-07-01T09:00:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo3Id,
        usuarioId: cliente2Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteAId,
        placaSnapshot: "P102ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-02T08:30:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo4Id,
        usuarioId: cliente2Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralDId,
        placaSnapshot: "P103ABC",
        tipoVehiculoSnapshot: "BICICLETA",
        fechaIngreso: new Date("2026-07-02T09:30:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo5Id,
        usuarioId: cliente3Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteBId,
        placaSnapshot: "P104ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-03T07:45:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo6Id,
        usuarioId: cliente3Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteCId,
        placaSnapshot: "P105ABC",
        tipoVehiculoSnapshot: "MOTOCICLETA",
        fechaIngreso: new Date("2026-07-03T10:00:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo7Id,
        usuarioId: cliente4Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralBId,
        placaSnapshot: "P106ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-04T08:00:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo8Id,
        usuarioId: cliente4Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteEId,
        placaSnapshot: "P107ABC",
        tipoVehiculoSnapshot: "CAMION",
        fechaIngreso: new Date("2026-07-04T08:15:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo9Id,
        usuarioId: cliente5Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteAId,
        placaSnapshot: "P108ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-05T09:00:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo10Id,
        usuarioId: cliente5Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralCId,
        placaSnapshot: "P109ABC",
        tipoVehiculoSnapshot: "MOTOCICLETA",
        fechaIngreso: new Date("2026-07-05T09:30:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo11Id,
        usuarioId: cliente6Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralAId,
        placaSnapshot: "P110ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-06T08:00:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo12Id,
        usuarioId: cliente6Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteDId,
        placaSnapshot: "P111ABC",
        tipoVehiculoSnapshot: "BICICLETA",
        fechaIngreso: new Date("2026-07-06T10:00:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo13Id,
        usuarioId: cliente7Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteAId,
        placaSnapshot: "P112ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-07T08:30:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo14Id,
        usuarioId: cliente7Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralCId,
        placaSnapshot: "P113ABC",
        tipoVehiculoSnapshot: "MOTOCICLETA",
        fechaIngreso: new Date("2026-07-07T09:00:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo15Id,
        usuarioId: cliente8Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteBId,
        placaSnapshot: "P114ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-08T08:00:00"),
        estado: "ACTIVO"
    },

    {
        vehiculoId: vehiculo16Id,
        usuarioId: cliente8Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteEId,
        placaSnapshot: "P115ABC",
        tipoVehiculoSnapshot: "CAMION",
        fechaIngreso: new Date("2026-07-01T08:00:00"),
        fechaSalida: new Date("2026-07-01T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("288.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo17Id,
        usuarioId: cliente9Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralAId,
        placaSnapshot: "P116ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-02T08:00:00"),
        fechaSalida: new Date("2026-07-02T16:30:00"),
        tiempoTotal: 510,
        costoTotal: NumberDecimal("127.50"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo18Id,
        usuarioId: cliente9Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteCId,
        placaSnapshot: "P117ABC",
        tipoVehiculoSnapshot: "MOTOCICLETA",
        fechaIngreso: new Date("2026-07-03T08:00:00"),
        fechaSalida: new Date("2026-07-03T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("54.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo19Id,
        usuarioId: cliente10Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralBId,
        placaSnapshot: "P118ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-04T08:00:00"),
        fechaSalida: new Date("2026-07-04T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("162.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo20Id,
        usuarioId: cliente10Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteDId,
        placaSnapshot: "P119ABC",
        tipoVehiculoSnapshot: "BICICLETA",
        fechaIngreso: new Date("2026-07-05T08:00:00"),
        fechaSalida: new Date("2026-07-05T15:00:00"),
        tiempoTotal: 420,
        costoTotal: NumberDecimal("21.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo21Id,
        usuarioId: cliente11Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteAId,
        placaSnapshot: "P120ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-06T08:00:00"),
        fechaSalida: new Date("2026-07-06T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("126.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo22Id,
        usuarioId: cliente11Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralCId,
        placaSnapshot: "P121ABC",
        tipoVehiculoSnapshot: "MOTOCICLETA",
        fechaIngreso: new Date("2026-07-07T08:00:00"),
        fechaSalida: new Date("2026-07-07T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("72.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo23Id,
        usuarioId: cliente12Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteBId,
        placaSnapshot: "P122ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-08T08:00:00"),
        fechaSalida: new Date("2026-07-08T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("144.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo24Id,
        usuarioId: cliente12Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteEId,
        placaSnapshot: "P123ABC",
        tipoVehiculoSnapshot: "CAMION",
        fechaIngreso: new Date("2026-07-09T08:00:00"),
        fechaSalida: new Date("2026-07-09T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("288.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo25Id,
        usuarioId: cliente13Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralAId,
        placaSnapshot: "P124ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-10T08:00:00"),
        fechaSalida: new Date("2026-07-10T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("135.00"),
        estado: "FINALIZADO"
    }
);

// PARQUEOS 26 - 50

parqueos.push(

    {
        vehiculoId: vehiculo26Id,
        usuarioId: cliente13Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteCId,
        placaSnapshot: "P125ABC",
        tipoVehiculoSnapshot: "MOTOCICLETA",
        fechaIngreso: new Date("2026-07-11T08:00:00"),
        fechaSalida: new Date("2026-07-11T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("54.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo27Id,
        usuarioId: cliente14Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteBId,
        placaSnapshot: "P126ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-12T08:00:00"),
        fechaSalida: new Date("2026-07-12T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("153.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo28Id,
        usuarioId: cliente14Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralDId,
        placaSnapshot: "P127ABC",
        tipoVehiculoSnapshot: "BICICLETA",
        fechaIngreso: new Date("2026-07-13T08:00:00"),
        fechaSalida: new Date("2026-07-13T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("27.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo29Id,
        usuarioId: cliente15Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteBId,
        placaSnapshot: "P128ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-14T08:00:00"),
        fechaSalida: new Date("2026-07-14T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("144.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo30Id,
        usuarioId: cliente15Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteEId,
        placaSnapshot: "P129ABC",
        tipoVehiculoSnapshot: "CAMION",
        fechaIngreso: new Date("2026-07-15T08:00:00"),
        fechaSalida: new Date("2026-07-15T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("288.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo1Id,
        usuarioId: cliente1Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralAId,
        placaSnapshot: "P100ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-16T08:00:00"),
        fechaSalida: new Date("2026-07-16T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("135.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo2Id,
        usuarioId: cliente1Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteCId,
        placaSnapshot: "P101ABC",
        tipoVehiculoSnapshot: "MOTOCICLETA",
        fechaIngreso: new Date("2026-07-17T08:00:00"),
        fechaSalida: new Date("2026-07-17T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("63.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo3Id,
        usuarioId: cliente2Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteAId,
        placaSnapshot: "P102ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-18T08:00:00"),
        fechaSalida: new Date("2026-07-18T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("117.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo5Id,
        usuarioId: cliente3Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralBId,
        placaSnapshot: "P104ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-19T08:00:00"),
        fechaSalida: new Date("2026-07-19T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("162.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo7Id,
        usuarioId: cliente4Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteAId,
        placaSnapshot: "P106ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-20T08:00:00"),
        fechaSalida: new Date("2026-07-20T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("126.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo9Id,
        usuarioId: cliente5Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteAId,
        placaSnapshot: "P108ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-21T08:00:00"),
        fechaSalida: new Date("2026-07-21T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("117.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo10Id,
        usuarioId: cliente5Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralCId,
        placaSnapshot: "P109ABC",
        tipoVehiculoSnapshot: "MOTOCICLETA",
        fechaIngreso: new Date("2026-07-22T08:00:00"),
        fechaSalida: new Date("2026-07-22T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("72.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo11Id,
        usuarioId: cliente6Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteBId,
        placaSnapshot: "P110ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-23T08:00:00"),
        fechaSalida: new Date("2026-07-23T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("153.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo13Id,
        usuarioId: cliente7Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralAId,
        placaSnapshot: "P112ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-24T08:00:00"),
        fechaSalida: new Date("2026-07-24T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("135.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo15Id,
        usuarioId: cliente8Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteBId,
        placaSnapshot: "P114ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-25T08:00:00"),
        fechaSalida: new Date("2026-07-25T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("144.00"),
        estado: "FINALIZADO"
    }
);

// PARQUEOS 41 - 50

parqueos.push(

    {
        vehiculoId: vehiculo17Id,
        usuarioId: cliente9Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralBId,
        placaSnapshot: "P116ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-26T08:00:00"),
        fechaSalida: new Date("2026-07-26T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("162.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo18Id,
        usuarioId: cliente9Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteCId,
        placaSnapshot: "P117ABC",
        tipoVehiculoSnapshot: "MOTOCICLETA",
        fechaIngreso: new Date("2026-07-27T08:00:00"),
        fechaSalida: new Date("2026-07-27T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("63.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo19Id,
        usuarioId: cliente10Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteAId,
        placaSnapshot: "P118ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-28T08:00:00"),
        fechaSalida: new Date("2026-07-28T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("117.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo21Id,
        usuarioId: cliente11Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralAId,
        placaSnapshot: "P120ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-29T08:00:00"),
        fechaSalida: new Date("2026-07-29T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("135.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo22Id,
        usuarioId: cliente11Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteCId,
        placaSnapshot: "P121ABC",
        tipoVehiculoSnapshot: "MOTOCICLETA",
        fechaIngreso: new Date("2026-07-30T08:00:00"),
        fechaSalida: new Date("2026-07-30T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("63.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo23Id,
        usuarioId: cliente12Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteBId,
        placaSnapshot: "P122ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-31T08:00:00"),
        fechaSalida: new Date("2026-07-31T17:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("144.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo25Id,
        usuarioId: cliente13Id,
        sedeId: sedeCentralId,
        zonaId: zonaCentralAId,
        placaSnapshot: "P124ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-31T09:00:00"),
        fechaSalida: new Date("2026-07-31T18:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("135.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo27Id,
        usuarioId: cliente14Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteBId,
        placaSnapshot: "P126ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-31T10:00:00"),
        fechaSalida: new Date("2026-07-31T19:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("153.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo29Id,
        usuarioId: cliente15Id,
        sedeId: sedeOrienteId,
        zonaId: zonaOrienteBId,
        placaSnapshot: "P128ABC",
        tipoVehiculoSnapshot: "AUTOMOVIL",
        fechaIngreso: new Date("2026-07-31T11:00:00"),
        fechaSalida: new Date("2026-07-31T20:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("144.00"),
        estado: "FINALIZADO"
    },

    {
        vehiculoId: vehiculo30Id,
        usuarioId: cliente15Id,
        sedeId: sedeOccidenteId,
        zonaId: zonaOccidenteEId,
        placaSnapshot: "P129ABC",
        tipoVehiculoSnapshot: "CAMION",
        fechaIngreso: new Date("2026-07-31T12:00:00"),
        fechaSalida: new Date("2026-07-31T21:00:00"),
        tiempoTotal: 540,
        costoTotal: NumberDecimal("288.00"),
        estado: "FINALIZADO"
    }

);


db.parqueos.insertMany(parqueos);

print("Parqueos insertados correctamente.");
print("Bloque 3 completado correctamente.");