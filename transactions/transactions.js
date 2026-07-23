// Registrar ingreso de vehiculo
async function registrarIngreso(datosIngreso) {
    const session = db.getMongo().startSession();
    try {
        session.startTransaction();

        const { vehiculoId, usuarioId, sedeId, zonaId } = datosIngreso;

        // Validar vehiculo
        const vehiculo = await db.collection("vehiculos").findOne(
            { _id: new ObjectId(vehiculoId) },
            { session }
        );

        if (!vehiculo) {
            throw new Error("El vehiculo no existe");
        }

        // Validar zona y cupo disponible
        const zona = await db.collection("zonas").findOne(
            { _id: new ObjectId(zonaId), cuposDisponibles: { $gt: 0 } },
            { session }
        );

        if (!zona) {
            throw new Error("No existe la zona o no tiene cupos disponibles");
        }

        // Crear registro parqueo
        const nuevoParqueo = {
            vehiculoId: new ObjectId(vehiculoId),
            usuarioId: new ObjectId(usuarioId),
            sedeId: new ObjectId(sedeId),
            zonaId: new ObjectId(zonaId),
            placaSnapshot: vehiculo.placa,
            tipoVehiculoSnapshot: vehiculo.tipoVehiculo,
            fechaIngreso: new Date(),
            estado: "ACTIVO"
        };

        await db.collection("parqueos").insertOne(nuevoParqueo, { session });

        // Reducir cupo disponible
        await db.collection("zonas").updateOne(
            { _id: new ObjectId(zonaId) },
            { $inc: { cuposDisponibles: -1 } },
            { session }
        );

        await session.commitTransaction();
        print("Ingreso registrado correctamente");
    } catch (error) {
        await session.abortTransaction();
        print("Error registrando ingreso: " + error.message);
        throw error;
    } finally {
        await session.endSession();
    }
}

// Registrar salida de vehiculo
async function registrarSalida(datosSalida) {
    const session = db.getMongo().startSession();
    try {
        session.startTransaction();

        const { parqueoId, tiempoTotal, costoTotal } = datosSalida;

        // Buscar parqueo activo
        const parqueo = await db.collection("parqueos").findOne(
            { _id: new ObjectId(parqueoId), estado: "ACTIVO" },
            { session }
        );

        if (!parqueo) {
            throw new Error("El parqueo no existe o ya fue finalizado");
        }

        // Finalizar parqueo
        await db.collection("parqueos").updateOne(
            { _id: new ObjectId(parqueoId) },
            {
                $set: {
                    fechaSalida: new Date(),
                    estado: "FINALIZADO",
                    tiempoTotal,
                    costoTotal: Decimal128.fromString(costoTotal.toString())
                }
            },
            { session }
        );

        // Liberar cupo
        await db.collection("zonas").updateOne(
            { _id: parqueo.zonaId },
            { $inc: { cuposDisponibles: 1 } },
            { session }
        );

        await session.commitTransaction();
        print("Salida registrada correctamente");
    } catch (error) {
        await session.abortTransaction();
        print("Error registrando salida: " + error.message);
        throw error;
    } finally {
        await session.endSession();
    }
}