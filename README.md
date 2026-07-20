# Parqueaderos Multisede

Proyecto #1 — Base de datos MongoDB para la gestión de un sistema de parqueaderos multisede.

## Descripción

Campus Parking es una empresa que administra múltiples parqueaderos ubicados en distintas ciudades. Este proyecto diseña e implementa, sobre MongoDB, la base de datos que soporta la operación de dicho sistema, reemplazando el manejo de la información mediante hojas de cálculo locales.

El modelo de datos permite gestionar usuarios con distintos niveles de acceso (administradores, empleados de sede y clientes), registrar vehículos, administrar sedes y sus zonas internas —con cupos, tarifas y tipos de vehículo permitidos— y almacenar el histórico de ingresos y salidas de vehículos, incluyendo el tiempo total y el costo asociado a cada parqueo.

El proyecto está implementado íntegramente mediante scripts de MongoDB ejecutados con mongosh. No incluye frontend, API REST ni Node.js.

## Tecnologías utilizadas

- **MongoDB** — Motor de base de datos NoSQL utilizado para el modelado, almacenamiento y consulta de la información.
- **mongosh** — MongoDB Shell, utilizada para la ejecución de todos los scripts del proyecto.

El proyecto no utiliza frameworks de backend, librerías de Node.js ni tecnologías de frontend. Toda la lógica está implementada mediante scripts nativos de MongoDB.

## Estructura del proyecto

El proyecto está organizado en los siguientes archivos:

```
db_config.js
test_dataset.js
aggregations.js
roles.js
README.md
```

### `db_config.js`
Crea la base de datos `parqueaderosMultisede` y sus colecciones, junto con las validaciones `$jsonSchema` y los índices correspondientes a cada una.

### `test_dataset.js`
Puebla las colecciones con un conjunto de datos de prueba realista y coherente, mediante `insertMany`.

### `aggregations.js`
Contiene las consultas analíticas construidas con el framework de agregación de MongoDB, utilizadas para generar los reportes del sistema.

### `roles.js`
Define los roles personalizados de MongoDB y configura el control de acceso (RBAC) para administradores, empleados de sede y clientes.

## Modelo de datos

El sistema está compuesto por cinco colecciones, diseñadas bajo un modelo híbrido de MongoDB: se utilizan referencias mediante `ObjectId` para relacionar colecciones, campos de tipo snapshot en los casos donde es necesario preservar información histórica, y documentos embebidos únicamente para información propia de cada entidad.

### `usuarios`
Almacena la información de todas las personas que interactúan con el sistema, diferenciando entre administradores, empleados de sede y clientes.

### `vehiculos`
Registra los vehículos asociados a cada cliente, incluyendo distintos tipos como automóviles, motocicletas, bicicletas y camiones.

### `sedes`
Representa los parqueaderos físicos administrados por la empresa, ubicados en distintas ciudades.

### `zonas`
Representa las áreas internas de cada sede, cada una con su propia capacidad, cupos disponibles, tarifa y tipos de vehículo permitidos.

### `parqueos`
Es la colección transaccional principal del sistema: registra cada ingreso y salida de vehículo, junto con el tiempo total y el costo asociado.

## Características implementadas

### Validación de datos (JSON Schema)
Cada colección cuenta con un esquema de validación `$jsonSchema` que define tipos de datos, campos obligatorios y reglas de negocio, como valores permitidos mediante `enum`.

### Índices
Se definieron índices sobre los campos más relevantes para las consultas y restricciones de unicidad del sistema, como los documentos de identificación y correos de usuarios, las placas de vehículos y los nombres de sede.

### Datos de prueba
El sistema incluye un conjunto de datos de prueba realista y variado, que cubre sedes, zonas, usuarios, vehículos y registros de parqueo, incluyendo casos con parqueos actualmente activos.

### Consultas de agregación
Se implementaron consultas analíticas mediante el framework de agregación de MongoDB, orientadas a la generación de reportes de negocio.

### Control de acceso (RBAC)
Se configuraron roles personalizados de MongoDB para diferenciar los permisos de acceso según el tipo de usuario del sistema.

## Seguridad RBAC

MongoDB implementa tres perfiles:

- Administrador
- Empleado de sede
- Cliente

La autenticación se encuentra preparada para activarse mediante --auth.

## Consultas de agregación

El archivo `aggregations.js` contiene un conjunto de consultas analíticas construidas con el framework de agregación de MongoDB. Estas consultas están orientadas a la generación de reportes de negocio sobre:

- Ocupación de zonas y sedes.
- Ingresos generados por sede.
- Uso del sistema por parte de los clientes.
- Frecuencia de uso según tipo de vehículo.
- Historial de parqueos por usuario.

Cada consulta se encuentra documentada mediante comentarios explicativos dentro del propio archivo.

## Seguridad

El control de acceso a la base de datos se implementa mediante roles personalizados de MongoDB, definidos en el archivo `roles.js`. Se establecen niveles de acceso diferenciados para administradores, empleados de sede y clientes, restringiendo las operaciones de lectura y escritura de acuerdo con el tipo de usuario y su alcance dentro del sistema.

## Instalación

Para ejecutar el proyecto es necesario contar con una instancia de MongoDB disponible y con acceso a `mongosh`.

Los scripts deben ejecutarse en el siguiente orden, ya que cada uno depende de la estructura y los datos generados por el anterior:

1. **db_config.js** — Crea la base de datos, las colecciones, sus validaciones y sus índices.
2. **test_dataset.js** — Puebla las colecciones con el conjunto de datos de prueba.
3. **aggregations.js** — Ejecuta las consultas analíticas sobre los datos ya cargados.
4. **roles.js** — Crea los roles personalizados y configura el control de acceso.

Cada archivo puede ejecutarse desde `mongosh`, ya sea copiando su contenido directamente en la shell o cargándolo desde la ruta correspondiente dentro de una sesión activa.

## Estado del proyecto

El proyecto se encuentra en desarrollo activo. A la fecha se encuentran implementados el modelo de datos y sus validaciones, los índices, el dataset de prueba, las consultas de agregación y el control de acceso mediante roles.

Las transacciones de MongoDB aún no forman parte de esta versión del proyecto.


- Implementación de transacciones MongoDB (`transactions.js`), esta implementacion ya se encuentra en el repositorio de GitHub.
su funcionalidad se encuentra en el archivo `transactions.js` basicamente es un wrapper para el framework de transacciones de MongoDB que permite realizar operaciones de escritura en la base de datos.