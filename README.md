# Parqueaderos Multisede

Proyecto #1 — Base de datos MongoDB para la gestión de un sistema de parqueaderos multisede.

## Descripción

Campus Parking es una empresa que administra múltiples parqueaderos ubicados en distintas ciudades. Este proyecto diseña e implementa, sobre MongoDB, la base de datos que soporta la operación de dicho sistema, reemplazando el manejo de la información mediante hojas de cálculo locales.

El modelo de datos permite gestionar usuarios con distintos niveles de acceso (administradores, empleados de sede y clientes), registrar vehículos, administrar sedes y sus zonas internas —con cupos, tarifas y tipos de vehículo permitidos— y almacenar el histórico de ingresos y salidas de vehículos, incluyendo el tiempo total y el costo asociado a cada parqueo.

El proyecto está implementado íntegramente mediante scripts de MongoDB ejecutados con mongosh. No incluye frontend, API REST ni Node.js.

## Tecnologías utilizadas

* **MongoDB** — Motor de base de datos NoSQL utilizado para el modelado, almacenamiento y consulta de la información.
* **mongosh** — MongoDB Shell utilizada para la ejecución de todos los scripts del proyecto.

El proyecto no utiliza frameworks de backend, librerías de Node.js ni tecnologías de frontend. Toda la lógica está implementada mediante scripts nativos de MongoDB.

## Estructura del proyecto

El proyecto está organizado en los siguientes archivos:

```
db_config.js
test_dataset.js
aggregations.js
roles.js
transactions.js
README.md
```

### `db_config.js`

Crea la base de datos `parqueaderosMultisede` y sus colecciones, junto con las validaciones mediante `$jsonSchema` y los índices correspondientes.

### `test_dataset.js`

Puebla las colecciones con un conjunto de datos de prueba realista y coherente mediante operaciones `insertMany`.

### `aggregations.js`

Contiene las consultas analíticas construidas con el framework de agregación de MongoDB, utilizadas para generar reportes del sistema.

### `roles.js`

Define los roles personalizados de MongoDB y configura el control de acceso basado en roles (RBAC) para administradores, empleados de sede y clientes.

### `transactions.js`

Contiene la implementación de transacciones MongoDB utilizando sesiones (`session`). Permite ejecutar operaciones de escritura de manera atómica, garantizando que los cambios sean confirmados completamente o revertidos mediante `abortTransaction()` cuando ocurre un error.

## Modelo de datos

El sistema está compuesto por cinco colecciones, diseñadas bajo un modelo híbrido de MongoDB: se utilizan referencias mediante `ObjectId` para relacionar colecciones, campos de tipo snapshot para preservar información histórica y documentos embebidos únicamente cuando la información pertenece exclusivamente a una entidad.

### `usuarios`

Almacena la información de todas las personas que interactúan con el sistema, diferenciando entre administradores, empleados de sede y clientes.

### `vehiculos`

Registra los vehículos asociados a cada cliente, incluyendo distintos tipos como automóviles, motocicletas, bicicletas y camiones.

### `sedes`

Representa los parqueaderos físicos administrados por la empresa, ubicados en distintas ciudades.

### `zonas`

Representa las áreas internas de cada sede, cada una con su capacidad, cupos disponibles, tarifa y tipos de vehículo permitidos.

### `parqueos`

Es la colección principal del sistema para el registro de operaciones de parqueo, almacenando la información relacionada con ingresos, salidas, tiempo total y costo asociado.

## Características implementadas

### Validación de datos (JSON Schema)

Cada colección cuenta con un esquema de validación `$jsonSchema` que define tipos de datos, campos obligatorios y reglas de negocio mediante restricciones como `enum`.

### Índices

Se definieron índices sobre los campos más relevantes para optimizar consultas y aplicar restricciones de unicidad, como documentos de identificación, correos de usuarios, placas de vehículos y nombres de sedes.

### Datos de prueba

El sistema incluye un conjunto de datos de prueba realista que cubre sedes, zonas, usuarios, vehículos y registros de parqueo, incluyendo casos con vehículos actualmente registrados en parqueos activos.

### Consultas de agregación

Se implementaron consultas analíticas mediante el framework de agregación de MongoDB orientadas a la generación de reportes de negocio.

### Control de acceso (RBAC)

Se configuraron roles personalizados de MongoDB para diferenciar los permisos según el tipo de usuario del sistema.

### Transacciones MongoDB

Se implementaron transacciones mediante sesiones de MongoDB para garantizar operaciones atómicas sobre múltiples documentos, permitiendo confirmar cambios mediante `commitTransaction()` o revertirlos mediante `abortTransaction()` en caso de fallo.

## Seguridad y control de acceso (RBAC)

MongoDB implementa tres perfiles principales:

* Administrador.
* Empleado de sede.
* Cliente.

Los permisos son administrados mediante roles personalizados definidos en el archivo `roles.js`, restringiendo operaciones de lectura y escritura según el nivel de acceso correspondiente.

La autenticación puede habilitarse mediante la configuración de MongoDB con la opción `--auth`.

## Consultas de agregación

El archivo `aggregations.js` contiene consultas analíticas construidas con el framework de agregación de MongoDB, orientadas a generar reportes sobre:

* Ocupación de zonas y sedes.
* Ingresos generados por sede.
* Uso del sistema por parte de clientes.
* Frecuencia de uso según tipo de vehículo.
* Historial de parqueos por usuario.

Cada consulta cuenta con comentarios explicativos dentro del archivo correspondiente.

## Transacciones MongoDB

El archivo `transactions.js` contiene la implementación de operaciones transaccionales utilizando sesiones de MongoDB.

Las transacciones permiten ejecutar múltiples operaciones relacionadas dentro de una única unidad de trabajo, asegurando consistencia de los datos mediante:

* Inicio de sesión transaccional.
* Confirmación mediante `commitTransaction()`.
* Reversión mediante `abortTransaction()` cuando ocurre un error.

## Instalación

Para ejecutar el proyecto es necesario contar con una instancia de MongoDB disponible y acceso a `mongosh`.

Los scripts deben ejecutarse en el siguiente orden:

1. **db_config.js** — Crea la estructura de la base de datos, colecciones, validaciones e índices.
2. **test_dataset.js** — Inserta los datos de prueba.
3. **aggregations.js** — Ejecuta las consultas analíticas.
4. **roles.js** — Configura los roles personalizados y permisos.
5. **transactions.js** — Ejecuta las operaciones transaccionales implementadas.

Cada archivo puede ejecutarse desde `mongosh`, cargando el script correspondiente dentro de una sesión activa.

## Estado del proyecto

El proyecto cuenta con la implementación completa de las principales funcionalidades requeridas:

* Modelo de datos en MongoDB.
* Validaciones mediante `$jsonSchema`.
* Índices.
* Dataset de prueba.
* Consultas de agregación.
* Control de acceso mediante roles RBAC.
* Implementación de transacciones MongoDB.

La solución fue desarrollada completamente mediante scripts nativos de MongoDB ejecutados con `mongosh`, sin utilizar frontend, API REST o Node.js.
