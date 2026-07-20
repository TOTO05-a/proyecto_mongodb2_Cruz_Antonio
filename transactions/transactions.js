// transactions.js
// Proyecto #1 - Parqueaderos Multisede
// Implementación de transacciones MongoDB

const { MongoClient, ObjectId, Decimal128 } = require("mongodb");


// ======================================
// Configuración conexión MongoDB
// ======================================

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

const databaseName = "parqueaderosMultisede";


// ======================================
// Registrar ingreso de vehículo
// ======================================

async function registrarIngreso(datosIngreso) {

    const session = client.startSession();

    try {

        session.startTransaction();


        const db = client.db(databaseName);


        const {
            vehiculoId,
            usuarioId,
            sedeId,
            zonaId
        } = datosIngreso;


        // Validar vehículo
        const vehiculo = await db.collection("vehiculos")
            .findOne(
                {
                    _id:new ObjectId(vehiculoId)
                },
                {
                    session
                }
            );


        if(!vehiculo){

            throw new Error(
                "El vehículo no existe"
            );

        }


        // Validar zona y cupo disponible
        const zona = await db.collection("zonas")
            .findOne(
                {
                    _id:new ObjectId(zonaId),
                    cuposDisponibles:{
                        $gt:0
                    }
                },
                {
                    session
                }
            );


        if(!zona){

            throw new Error(
                "No existe la zona o no tiene cupos disponibles"
            );

        }


        // Crear registro parqueo
        const nuevoParqueo = {

            vehiculoId:new ObjectId(vehiculoId),

            usuarioId:new ObjectId(usuarioId),

            sedeId:new ObjectId(sedeId),

            zonaId:new ObjectId(zonaId),


            // Snapshot histórico

            placaSnapshot:
                vehiculo.placa,


            tipoVehiculoSnapshot:
                vehiculo.tipoVehiculo,


            fechaIngreso:
                new Date(),


            estado:
                "ACTIVO"

        };



        await db.collection("parqueos")
            .insertOne(
                nuevoParqueo,
                {
                    session
                }
            );


        // Reducir cupo disponible
        await db.collection("zonas")
            .updateOne(
                {
                    _id:new ObjectId(zonaId)
                },
                {
                    $inc:{
                        cuposDisponibles:-1
                    }
                },
                {
                    session
                }
            );



        await session.commitTransaction();


        console.log(
            "Ingreso registrado correctamente"
        );


    }
    catch(error){


        await session.abortTransaction();


        console.error(
            "Error registrando ingreso:",
            error.message
        );


        throw error;

    }
    finally{


        await session.endSession();

    }

}



// ======================================
// Registrar salida de vehículo
// ======================================

async function registrarSalida(datosSalida){


    const session = client.startSession();


    try{


        session.startTransaction();


        const db = client.db(databaseName);



        const {
            parqueoId,
            tiempoTotal,
            costoTotal
        } = datosSalida;



        // Buscar parqueo activo
        const parqueo =
            await db.collection("parqueos")
            .findOne(
                {
                    _id:new ObjectId(parqueoId),
                    estado:"ACTIVO"
                },
                {
                    session
                }
            );



        if(!parqueo){

            throw new Error(
                "El parqueo no existe o ya fue finalizado"
            );

        }



        // Finalizar parqueo
        await db.collection("parqueos")
            .updateOne(
                {
                    _id:new ObjectId(parqueoId)
                },
                {

                    $set:{

                        fechaSalida:
                            new Date(),

                        estado:
                            "FINALIZADO",

                        tiempoTotal,

                        costoTotal:
                            Decimal128.fromString(
                                costoTotal.toString()
                            )

                    }

                },
                {
                    session
                }
            );



        // Liberar cupo
        await db.collection("zonas")
            .updateOne(
                {
                    _id:
                        parqueo.zonaId
                },
                {

                    $inc:{
                        cuposDisponibles:1
                    }

                },
                {
                    session
                }
            );




        await session.commitTransaction();



        console.log(
            "Salida registrada correctamente"
        );


    }
    catch(error){


        await session.abortTransaction();


        console.error(
            "Error registrando salida:",
            error.message
        );


        throw error;

    }
    finally{


        await session.endSession();

    }

}



// ======================================
// Ejecución de prueba
// ======================================

async function main(){


    try{


        await client.connect();


        /*
        
        Ejemplo ingreso:

        await registrarIngreso({

            vehiculoId:"",
            usuarioId:"",
            sedeId:"",
            zonaId:""

        });


        Ejemplo salida:

        await registrarSalida({

            parqueoId:"",
            tiempoTotal:120,
            costoTotal:50

        });


        */


    }
    finally{


        await client.close();

    }

}


// Ejecutar únicamente si se llama directamente

if(require.main === module){

    main();

}



module.exports = {

    registrarIngreso,

    registrarSalida

};