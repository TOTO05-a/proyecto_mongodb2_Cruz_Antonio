Transferencia Técnica Definitiva — Proyecto #1 Parqueaderos Multisede
Modelo final aprobado (corregido)
Arquitectura general

Base de datos:

parqueaderosMultisede

Modelo:

Modelo híbrido MongoDB

Se utilizarán:

Referencias mediante ObjectId para relaciones entre colecciones.
Campos snapshot únicamente donde aporten valor histórico.
Documentos embebidos únicamente para información propia de la entidad.

Convenciones:

camelCase obligatorio.
_id generado por MongoDB.
Tipos BSON correctos.
Sin campos de auditoría fuera del alcance.
Colecciones definitivas

El sistema tendrá exactamente:

usuarios
vehiculos
sedes
zonas
parqueos

No existe:

registrosParqueo
1. Colección usuarios
Objetivo

Almacena todas las personas que interactúan con el sistema.

Tipos:

Administradores.
Empleados de sede.
Clientes.
Documento ejemplo
{
  "_id": ObjectId(),

  "nombreCompleto": "Juan Pérez",
  "documento": "123456789",
  "correo": "juan@email.com",
  "telefono": "55555555",

  "rol": "CLIENTE",
  "estado": "ACTIVO"
}
Campos
Campo	Tipo BSON	Obligatorio	Descripción
_id	ObjectId	Sí	Identificador único
nombreCompleto	String	Sí	Nombre completo
documento	String	Sí	Documento identificación
correo	String	Sí	Email usuario
telefono	String	Sí	Teléfono
rol	String	Sí	Tipo usuario
estado	String	Sí	Estado cuenta
Valores permitidos
rol
[
 "ADMIN",
 "EMPLEADO",
 "CLIENTE"
]
estado
[
 "ACTIVO",
 "INACTIVO"
]
Índices
documento: unique

correo: unique

rol: normal

estado: normal
2. Colección vehiculos
Objetivo

Registrar vehículos asociados a clientes.

Documento ejemplo
{
 "_id": ObjectId(),

 "placa": "P123ABC",

 "tipoVehiculo": "AUTOMOVIL",

 "marca": "Toyota",
 "modelo": "Corolla",
 "color": "Blanco",

 "usuarioId": ObjectId()
}
Campos
Campo	Tipo BSON	Obligatorio
_id	ObjectId	Sí
placa	String	Sí
tipoVehiculo	String	Sí
marca	String	Sí
modelo	String	Sí
color	String	Sí
usuarioId	ObjectId	Sí
Valores tipo vehículo
[
"AUTOMOVIL",
"MOTOCICLETA",
"BICICLETA",
"CAMION"
]
Relación
usuarios 1 ---- N vehiculos

Referencia:

vehiculos.usuarioId
        |
        v
usuarios._id
Índices
placa: unique

usuarioId: normal
3. Colección sedes
Objetivo

Representar los diferentes parqueaderos físicos.

Documento ejemplo
{
 "_id": ObjectId(),

 "nombre": "Sede Central",

 "direccion": "Zona 10 Guatemala",

 "capacidadTotal": 100,

 "estado": "ACTIVA"
}
Campos
Campo	Tipo BSON	Obligatorio
_id	ObjectId	Sí
nombre	String	Sí
direccion	String	Sí
capacidadTotal	Int32	Sí
estado	String	Sí
Estados
[
"ACTIVA",
"INACTIVA"
]
Índices
nombre: unique

estado: normal
4. Colección zonas
Objetivo

Representar las áreas internas de cada sede.

Permite controlar:

cupos.
tarifas.
tipos vehículos permitidos.
Documento ejemplo
{
 "_id": ObjectId(),

 "sedeId": ObjectId(),

 "nombre": "Zona A",

 "tipoZona": "GENERAL",

 "capacidad": 50,

 "cuposDisponibles": 35,

 "tiposVehiculoPermitidos":
 [
   "AUTOMOVIL",
   "MOTOCICLETA"
 ],

 "tarifa": Decimal128("10.00"),

 "estado": "ACTIVA"
}
Campos
Campo	Tipo BSON	Obligatorio
_id	ObjectId	Sí
sedeId	ObjectId	Sí
nombre	String	Sí
tipoZona	String	Sí
capacidad	Int32	Sí
cuposDisponibles	Int32	Sí
tiposVehiculoPermitidos	Array	Sí
tarifa	Decimal128	Sí
estado	String	Sí
Relación
sedes 1 ---- N zonas

Referencia:

zonas.sedeId
       |
       v
sedes._id
Estados
[
"ACTIVA",
"INACTIVA"
]
Índices
sedeId: normal

estado: normal
5. Colección parqueos
Objetivo

Registrar ingresos y salidas de vehículos.

Es la colección transaccional principal.

Documento ejemplo
{
 "_id": ObjectId(),

 "vehiculoId": ObjectId(),

 "usuarioId": ObjectId(),

 "sedeId": ObjectId(),

 "zonaId": ObjectId(),


 "placaSnapshot": "P123ABC",

 "tipoVehiculoSnapshot": "AUTOMOVIL",


 "fechaIngreso": ISODate(),

 "fechaSalida": ISODate(),


 "estado": "ACTIVO",


 "tiempoTotal": 120,

 "costoTotal": Decimal128("25.00")
}
Campos
Campo	Tipo BSON	Obligatorio
_id	ObjectId	Sí
vehiculoId	ObjectId	Sí
usuarioId	ObjectId	Sí
sedeId	ObjectId	Sí
zonaId	ObjectId	Sí
placaSnapshot	String	Sí
tipoVehiculoSnapshot	String	Sí
fechaIngreso	Date	Sí
fechaSalida	Date	No
estado	String	Sí
tiempoTotal	Int32	No
costoTotal	Decimal128	No
Estados
[
"ACTIVO",
"FINALIZADO"
]
Relaciones
vehiculos 1 ---- N parqueos

usuarios 1 ---- N parqueos

sedes 1 ---- N parqueos

zonas 1 ---- N parqueos
Índices
vehiculoId

usuarioId

sedeId

zonaId

fechaIngreso

estado
Reglas generales MongoDB

Todos los schemas deben implementar:

validationLevel: "strict"

validationAction: "error"