
// Archivo: aggregations.js
// Objetivo: Consultas de agregación MongoDB



// Seleccionar base de datos

// use parqueaderosMultisede;



// AGREGACIÓN 1
// Ocupación actual por sede
//
// Objetivo:
// Mostrar cuántos vehículos están actualmente dentro
// de cada sede.
//
// Datos usados:
// parqueos.estado = ACTIVO
// parqueos.sedeId -> sedes._id


db.parqueos.aggregate([

    {
        $match: {
            estado: "ACTIVO"
        }
    },


    {
        $group: {
            _id: "$sedeId",
            vehiculosDentro: {
                $count: {}
            }
        }
    },


    {
        $lookup: {
            from: "sedes",
            localField: "_id",
            foreignField: "_id",
            as: "sede"
        }
    },


    {
        $unwind: "$sede"
    },


    {
        $project: {
            _id: 0,
            sede: "$sede.nombre",
            capacidadTotal: "$sede.capacidadTotal",
            vehiculosDentro: 1
        }
    },


    {
        $sort: {
            vehiculosDentro: -1
        }
    }

]);




// AGREGACIÓN 2
// Ingresos totales generados por sede
//
// Objetivo:
// Calcular cuánto dinero ha generado cada sede.
//
// Datos usados:
// parqueos.estado = FINALIZADO
// parqueos.costoTotal
// parqueos.sedeId -> sedes._id
//


db.parqueos.aggregate([


    {
        $match: {
            estado: "FINALIZADO"
        }
    },


    {
        $group: {
            _id: "$sedeId",

            ingresosTotales: {
                $sum: "$costoTotal"
            },

            cantidadServicios: {
                $count: {}
            }
        }
    },


    {
        $lookup: {
            from: "sedes",
            localField: "_id",
            foreignField: "_id",
            as: "sede"
        }
    },


    {
        $unwind: "$sede"
    },


    {
        $project: {

            _id: 0,

            sede: "$sede.nombre",

            cantidadServicios: 1,

            ingresosTotales: 1
        }
    },


    {
        $sort: {
            ingresosTotales: -1
        }
    }


]);

// =====================================================
// AGREGACIÓN 3
// Vehículos actualmente dentro del parqueo
//
// Objetivo:
// Mostrar los vehículos que tienen un parqueo activo,
// indicando sede y zona donde se encuentran.
//
// Datos usados:
// parqueos.estado = ACTIVO
// parqueos.sedeId -> sedes._id
// parqueos.zonaId -> zonas._id
//
// =====================================================


db.parqueos.aggregate([


    {
        $match: {
            estado: "ACTIVO"
        }
    },


    {
        $lookup: {
            from: "sedes",
            localField: "sedeId",
            foreignField: "_id",
            as: "sede"
        }
    },


    {
        $lookup: {
            from: "zonas",
            localField: "zonaId",
            foreignField: "_id",
            as: "zona"
        }
    },


    {
        $unwind: "$sede"
    },


    {
        $unwind: "$zona"
    },


    {
        $project: {

            _id: 0,

            placa: "$placaSnapshot",

            tipoVehiculo: "$tipoVehiculoSnapshot",

            fechaIngreso: 1,

            sede: "$sede.nombre",

            zona: "$zona.nombre",

            estado: 1

        }
    },


    {
        $sort: {
            sede: 1,
            zona: 1
        }
    }


]);





// =====================================================
// AGREGACIÓN 4
// Clientes con mayor cantidad de registros
//
// Objetivo:
// Identificar los usuarios que más veces han utilizado
// el servicio de parqueo.
//
// Datos usados:
// parqueos.usuarioId -> usuarios._id
// usuarios.nombreCompleto
//
// =====================================================


db.parqueos.aggregate([


    {
        $group: {

            _id: "$usuarioId",

            cantidadRegistros: {
                $sum: 1
            }

        }
    },


    {
        $lookup: {

            from: "usuarios",

            localField: "_id",

            foreignField: "_id",

            as: "usuario"

        }
    },


    {
        $unwind: "$usuario"
    },


    {
        $match: {

            "usuario.rol": "CLIENTE"

        }
    },


    {
        $project: {

            _id: 0,

            cliente: "$usuario.nombreCompleto",

            documento: "$usuario.documento",

            cantidadRegistros: 1

        }
    },


    {
        $sort: {

            cantidadRegistros: -1

        }
    }


]);

// =====================================================
// AGREGACIÓN 5
// Zonas más utilizadas
//
// Objetivo:
// Determinar cuáles zonas tienen mayor cantidad
// de registros de parqueo.
//
// Datos usados:
// parqueos.zonaId -> zonas._id
//
// =====================================================


db.parqueos.aggregate([


    {
        $group: {

            _id: "$zonaId",

            cantidadUsos: {

                $sum: 1

            }

        }

    },


    {
        $lookup: {

            from: "zonas",

            localField: "_id",

            foreignField: "_id",

            as: "zona"

        }

    },


    {
        $unwind: "$zona"

    },


    {
        $lookup: {

            from: "sedes",

            localField: "zona.sedeId",

            foreignField: "_id",

            as: "sede"

        }

    },


    {
        $unwind: "$sede"

    },


    {
        $project: {

            _id: 0,

            zona: "$zona.nombre",

            tipoZona: "$zona.tipoZona",

            sede: "$sede.nombre",

            cantidadUsos: 1

        }

    },


    {
        $sort: {

            cantidadUsos: -1

        }

    }


]);





// =====================================================
// AGREGACIÓN 6
// Tiempo promedio de permanencia
//
// Objetivo:
// Calcular el promedio de tiempo que permanecen
// los vehículos dentro del parqueo.
//
// Solo toma registros FINALIZADO.
//
// Datos usados:
// parqueos.tiempoTotal
//
// =====================================================


db.parqueos.aggregate([


    {
        $match: {

            estado: "FINALIZADO"

        }

    },


    {
        $group: {

            _id: null,

            promedioTiempo: {

                $avg: "$tiempoTotal"

            },

            tiempoMaximo: {

                $max: "$tiempoTotal"

            },

            tiempoMinimo: {

                $min: "$tiempoTotal"

            },

            totalRegistros: {

                $sum: 1

            }

        }

    },


    {
        $project: {

            _id: 0,

            promedioTiempo: 1,

            tiempoMaximo: 1,

            tiempoMinimo: 1,

            totalRegistros: 1

        }

    }


]);

// =====================================================
// AGREGACIÓN 7
// Ingresos por tipo de vehículo
//
// Objetivo:
// Calcular cuánto dinero genera cada tipo de vehículo.
//
// Datos usados:
// parqueos.estado = FINALIZADO
// parqueos.tipoVehiculoSnapshot
// parqueos.costoTotal
//
// =====================================================


db.parqueos.aggregate([


    {
        $match: {

            estado: "FINALIZADO"

        }

    },


    {
        $group: {

            _id: "$tipoVehiculoSnapshot",

            ingresosTotales: {

                $sum: "$costoTotal"

            },

            cantidadServicios: {

                $sum: 1

            }

        }

    },


    {
        $project: {

            _id: 0,

            tipoVehiculo: "$_id",

            ingresosTotales: 1,

            cantidadServicios: 1

        }

    },


    {
        $sort: {

            ingresosTotales: -1

        }

    }


]);






// =====================================================
// AGREGACIÓN 8
// Reporte general multisede
//
// Objetivo:
// Generar un resumen completo por sede y zona:
//
// - Cantidad de parqueos realizados
// - Tipos de vehículos utilizados
// - Ingresos generados
//
// Relaciones:
// parqueos.sedeId -> sedes._id
// parqueos.zonaId -> zonas._id
//
// =====================================================


db.parqueos.aggregate([


    {
        $lookup: {

            from: "sedes",

            localField: "sedeId",

            foreignField: "_id",

            as: "sede"

        }

    },


    {
        $lookup: {

            from: "zonas",

            localField: "zonaId",

            foreignField: "_id",

            as: "zona"

        }

    },


    {
        $unwind: "$sede"

    },


    {
        $unwind: "$zona"

    },


    {
        $group: {

            _id: {

                sede: "$sede.nombre",

                zona: "$zona.nombre"

            },


            cantidadParqueos: {

                $sum: 1

            },


            ingresosGenerados: {

                $sum: {

                    $cond: [

                        {
                            $eq: [
                                "$estado",
                                "FINALIZADO"
                            ]
                        },

                        "$costoTotal",

                        0

                    ]

                }

            },


            tiposVehiculos: {

                $addToSet: "$tipoVehiculoSnapshot"

            }

        }

    },


    {
        $project: {

            _id: 0,

            sede: "$_id.sede",

            zona: "$_id.zona",

            cantidadParqueos: 1,

            ingresosGenerados: 1,

            tiposVehiculos: 1

        }

    },


    {
        $sort: {

            sede: 1,

            cantidadParqueos: -1

        }

    }


]);