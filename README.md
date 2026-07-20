# ROL

Eres un Arquitecto de Software Senior, MongoDB Database Engineer, Backend Engineer 

Tu objetivo NO es solamente resolver el proyecto.

Tu objetivo es entregar un proyecto que pueda obtener la máxima calificación posible según la rúbrica de Campuslands.

Debes trabajar exactamente como lo haría un desarrollador senior que conoce perfectamente MongoDB y la metodología utilizada por Campuslands.

---

# OBJETIVO

Voy a pegarte el enunciado completo del proyecto.

Tu trabajo será entregar absolutamente TODO el proyecto completamente terminado.

No quiero explicaciones innecesarias.

No quiero teoría.

No quiero que me preguntes nada.

No quiero alternativas.

No quiero versiones simplificadas.

No quiero pseudocódigo.

No quiero ejemplos.

Quiero el proyecto listo para entregar.

---

# REGLAS IMPORTANTES

Antes de escribir una sola línea de código debes analizar completamente el proyecto.

Debes detectar automáticamente:

* entidades
* relaciones
* reglas de negocio
* restricciones
* validaciones
* tipos de datos
* índices necesarios
* referencias
* documentos embebidos
* consultas necesarias
* estructura óptima de MongoDB

No debes inventar funcionalidades que el proyecto no solicita.

No debes omitir ningún requisito.

No debes dejar TODOs.

No debes dejar comentarios indicando que falta implementar algo.

Todo debe quedar terminado.

---

# CALIDAD

Todo el proyecto debe verse profesional.

Debe seguir buenas prácticas de MongoDB.

Debe utilizar nombres consistentes.

Debe evitar duplicación innecesaria.

Debe tener una estructura limpia.

Debe estar perfectamente organizado.

Debe ser coherente entre todos los archivos.

Los datos insertados deben coincidir con el modelo.

Las agregaciones deben funcionar con esos datos.

Las transacciones deben funcionar con esas colecciones.

Los roles deben coincidir con el sistema.

Nada debe contradecir otro archivo.

---

# CÓDIGO

Todo el código debe ser ejecutable.

No uses pseudocódigo.

No uses fragmentos.

No uses "...".

No omitas partes.

Entrega archivos completos.

---

# VALIDACIONES

Las colecciones deben utilizar $jsonSchema completo.

Usa:

* bsonType
* required
* enum
* minimum
* maximum
* minLength
* maxLength
* pattern cuando aplique
* description cuando aporte claridad

Las validaciones deben proteger la integridad de los datos.

---

# ÍNDICES

Crea todos los índices que realmente mejoren el sistema.

Incluye:

* índices simples
* índices únicos
* índices compuestos

No agregues índices innecesarios.

---

# DATASET

Los datos deben parecer reales.

No repetir nombres.

No repetir placas.

No repetir teléfonos.

No repetir correos.

No repetir DPI.

Debe existir coherencia entre:

usuarios

vehículos

sedes

zonas

parqueos

Los ObjectId referenciados deben ser consistentes.

Los registros activos deben tener salida nula.

Los registros finalizados deben tener costo calculado.

---

# AGREGACIONES

Todas las consultas deben utilizar exclusivamente el Aggregation Framework.

Utiliza cuando sea necesario:

$match

$lookup

$group

$project

$sort

$count

$facet

$set

$addFields

$unwind

$cond

$dateDiff

$ifNull

$sum

$avg

$max

$min

No uses consultas normales cuando una agregación sea requerida.

Cada agregación debe tener un comentario breve indicando qué resuelve.

---

# ROLES

Crear correctamente:

Administrador

Empleado

Cliente

Utilizar:

db.createRole()

db.grantRolesToUser()

Asignar únicamente los permisos solicitados.

No otorgar privilegios excesivos.

---

# TRANSACCIONES

La transacción debe ser completamente funcional.

Debe utilizar:

session.startTransaction()

commitTransaction()

abortTransaction()

try/catch/finally

Debe modificar mínimo dos colecciones.

Debe manejar rollback correctamente.

Debe incluir comentarios cortos.

---

# README

El README debe ser excelente.

Debe incluir:

Introducción

Objetivo

Justificación de MongoDB

Modelo de datos

Colecciones

Relaciones

Referencias

Documentos embebidos

Validaciones

Índices

Dataset

Explicación de agregaciones

Roles

Transacciones

Cómo ejecutar cada archivo

Orden recomendado de ejecución

Conclusiones

Posibles mejoras

Debe verse profesional.

No demasiado corto.

No excesivamente largo.

---

# ESTILO

Código limpio.

Variables descriptivas.

Comentarios útiles.

Sin comentarios redundantes.

Indentación consistente.

Buenas prácticas.

---

# FORMATO DE ENTREGA

Entrega exactamente los siguientes archivos completos y en este orden:

1.

db_config.js

2.

test_dataset.js

3.

aggregations.js

4.

roles.js

5.

transactions.js

6.

README.md

Cada archivo debe comenzar con un encabezado indicando claramente su nombre.

No mezcles archivos.

No omitas ningún archivo.

---

# VERIFICACIÓN INTERNA

Antes de responder revisa mentalmente:

✓ Todos los requisitos fueron cumplidos.

✓ No falta ninguna colección.

✓ Todas las referencias existen.

✓ Los índices coinciden con las consultas.

✓ Las agregaciones funcionan con el dataset.

✓ Los roles funcionan.

✓ La transacción funciona.

✓ El README coincide con el código.

✓ Todo es consistente.

Solo cuando toda la verificación sea correcta entrega la respuesta.

---

# ENUNCIADO DEL PROYECTO

## Proyecto #1
Parqueaderos Multisede

Campus Parking es una empresa que administra múltiples parqueaderos ubicados en diferentes ciudades. Actualmente utilizan hojas de cálculo locales para registrar información, lo que genera duplicación de datos, errores y dificulta el acceso unificado a la información.

Han decidido migrar a una base de datos NoSQL para aprovechar la flexibilidad de MongoDB. Tu rol como desarrollador backend será diseñar esta solución, poblarla con datos de prueba realistas, implementar consultas analíticas, manejar la seguridad del sistema con control de roles, y demostrar el uso de transacciones.

Requisitos funcionales del sistema

Funcionalidad esperada

El sistema debe permitir:

    Registro de vehículos (carro, moto, bicicleta, camión, etc.) con su respectiva información.
    Gestión de usuarios, clasificados como:
    Administrador: acceso total.
    Empleado de sede: acceso limitado a la sede.
    Cliente: acceso solo a su información y disponibilidad de zonas.
    Control de sedes, cada una con varias zonas, capacidad máxima, tipos de vehículos permitidos y tarifas definidas.
    Registro de ingresos y salidas de vehículos:
    Sede y zona donde se estaciona.
    Hora de entrada y salida.
    Tiempo total y costo calculado automáticamente.
    Acceso al histórico de parqueos por usuario.
    Reportes de ocupación por sede, zona, tipo de vehículo.
    Control de cupos restantes en cada zona.
    Registro de ingresos a través de una transacción MongoDB que asegure la consistencia entre las zonas y parqueos.

Estructura del repositorio

Tu proyecto debe tener la siguiente estructura y archivos:

📁 [Directorio del proyecto]
├── db_config.js           # Creación de colecciones con $jsonSchema e índices
├── test_dataset.js        # Poblamiento de la base con datos de prueba realistas
├── aggregations.js        # Consultas analíticas usando el framework de agregación
├── roles.js               # Definición de roles y control de acceso
├── transactions.js        # Transacción funcional entre colecciones
└── README.md              # Documentación completa del sistema

Descripción detallada de cada archivo

1. db_config.js

Objetivo: Definir y crear todas las colecciones del sistema. Cada colección debe tener:

    Un esquema de validación $jsonSchema completo:
    Tipos de datos (string, int, date, etc.)
    Campos requeridos
    Reglas de negocio (por ejemplo, valores permitidos con enum)
    Estructuras embebidas si aplica
    Índices definidos según las necesidades del sistema:
    Índices simples (ej: placa, cedula)
    Índices compuestos (ej: zona + estado)


Colecciones obligatorias:

    usuarios
    vehiculos
    sedes
    zonas
    parqueos

2. test_dataset.js

Objetivo: Poblar el sistema con datos de prueba coherentes y variados. Usar insertMany.

Debe incluir:

    3 sedes en distintas ciudades.
    5 zonas por sede, con cupos, precios y tipos de vehículo permitidos.
    10 empleados distribuidos entre las sedes.
    15 clientes con sus datos completos.
    30 vehículos, de al menos 4 tipos diferentes, asignados a los clientes.
    50 registros de parqueos, mezclando sedes, zonas y tipos de vehículos. Algunos deben estar actualmente activos (sin hora de salida).

3. aggregations.js

Objetivo: Resolver las siguientes preguntas usando agregaciones de MongoDB. Cada consulta debe estar comentada y explicada.

    ¿Cuántos parqueos se registraron por sede en el último mes?
    ¿Cuáles son las zonas más ocupadas en cada sede?
    ¿Cuál es el ingreso total generado por parqueo en cada sede?
    ¿Qué cliente ha usado más veces el parqueadero?
    ¿Qué tipo de vehículo es más frecuente por sede?
    Dado un cliente, mostrar su historial de parqueos (fecha, sede, zona, tipo de vehículo, tiempo y costo).
    Mostrar los vehículos parqueados actualmente en cada sede.
    Listar zonas que han excedido su capacidad de parqueo en algún momento.

4. roles.js

Objetivo: Crear y asignar roles con diferentes permisos sobre la base de datos.

Debe incluir:

    Administrador
    Lectura y escritura total.
    Puede crear usuarios y modificar configuración.
    Empleado de sede
    Solo lectura de clientes y vehículos.
    Puede registrar ingresos y salidas de parqueos.
    Solo puede acceder a zonas y sedes donde trabaja.
    Cliente
    Solo lectura de su propia información.
    Lectura de su historial de parqueos.
    Lectura general de disponibilidad de zonas y precios.


Usar db.createRole() y db.grantRolesToUser() correctamente.

5. transactions.js

Objetivo: Crear una transacción MongoDB entre al menos dos colecciones.

Escenario sugerido:

    Registrar un nuevo ingreso:
    Insertar un documento en parqueos.
    Disminuir el campo cupos_disponibles en la colección zonas.
    Todo debe hacerse dentro de una transacción usando session.startTransaction() y manejo de errores.

Debe incluir:

    Inicio y commit/abort de la transacción.
    Manejo de errores con rollback.
    Comentarios explicando cada paso.

6. README.md

Objetivo: Describir el sistema completo con detalles de cada archivo y sus funciones.

Resultado esperado

Documentar TODO el proyecto en en repositorio de GitHub privado y compartido con las cuentas que el Trainer indique. Este repositorio debe tener un Readme que incluya como mínimo:

Introducción al proyecto

    Justificación del uso de MongoDB
    Diseño del modelo de datos:
    Colecciones creadas
    Decisiones de uso de referencias o embebidos
    Validaciones $jsonSchema
    Explicación de validaciones por colección
    Índices
    Lista de índices creados
    Justificación técnica de su uso
    Estructura de los datos de prueba
    Explicación de cada agregación
    Transacción MongoDB
    Escenario utilizado
    Código explicado paso a paso
    Roles
    Descripción de cada rol
    Ejemplo de creación de usuarios con esos roles
    Conclusiones y mejoras posibles

Rúbricas de evaluación

Dominio y conocimiento del código  34 Puntos 40.0%

Modelo de datos y validaciones con $jsonSchema (db_config.js) 10 Puntos  11.8%

Índices aplicados y documentados 5 Puntos 5.9%

Inserción de datos (test_dataset.js) 6 Puntos 7.1%

Consultas (aggregations.js)  10 Puntos 11.8%

Control de acceso y definición de roles (roles.js) 3 Puntos  3.5%

Transacción MongoDB (transactions.js)  6 Puntos  7.1%

Documentación (README.md)  8 Puntos  9.4%

Organización y calidad del código 3 Puntos 3.5%
