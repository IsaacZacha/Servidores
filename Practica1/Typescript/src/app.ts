//Definicion de variables
let nombreCliente: string = "Carlos Díaz";
let reservaActiva: boolean = true;
let idReservaActual: number = 1001;
let fechaReserva: string = "2025-04-29";

const extensionEjemplo = {
    id: 1,
    reservaId: 1001,
    nuevaFechaDevolucion: "2025-05-05",
    razonExtension: "Viaje inesperado",
};

const cancelacionEjemplo = {
    id: 1,
    reservaId: 1002,
    motivo: "Lluvia intensa",
    fechaCancelacion: "2025-04-30",
};

const calificacionEjemplo = {
    id: 1,
    reservaId: 1003,
    puntaje: 4,
    comentario: "Buen servicio",
};

//Arreglos
const extensiones: IExtensionReserva[] = [extensionEjemplo];
const cancelaciones: ICancelacion[] = [cancelacionEjemplo];
const calificaciones: ICalificacion[] = [calificacionEjemplo];


//interfaces
interface IExtensionReserva {
    id: number;
    reservaId: number;
    nuevaFechaDevolucion: string;
    razonExtension: string;
}

interface ICancelacion {
    id: number;
    reservaId: number;
    motivo: string;
    fechaCancelacion: string;
}

interface ICalificacion {
    id: number;
    reservaId: number;
    puntaje: number;
    comentario?: string;
}

//Funciones
function crearExtension(extensiones: IExtensionReserva[], nueva: IExtensionReserva): void {
    extensiones.push(nueva);
}

function mostrarCalificaciones(lista: ICalificacion[]): void {
    lista.forEach(c => {
        console.log(`Reserva ${c.reservaId} - Puntaje: ${c.puntaje} - Comentario: ${c.comentario}`);
    });
}

//Operadores
// Spread: clonar arreglo de extensiones
const nuevasExtensiones = [...extensiones];

// Rest: función que recibe muchas cancelaciones
function procesarCancelaciones(...cancelaciones: ICancelacion[]) {
    cancelaciones.forEach(c => console.log(`Cancelación por ${c.motivo} en ${c.fechaCancelacion}`));
}

//CallBacks 
function procesarCalificacion(cal: ICalificacion, callback: (msg: string) => void) {
    const mensaje = `Procesada calificación con ${cal.puntaje} estrellas`;
    callback(mensaje);
}

procesarCalificacion(calificacionEjemplo, (msg) => console.log(msg));


//Promise
function guardarExtensionAsync(ext: IExtensionReserva): Promise<IExtensionReserva> {
    return new Promise((resolve) => {
        setTimeout(() => {
            extensiones.push(ext);
            resolve(ext);
        }, 2000); // simulamos retardo
    });
}


//async
async function agregarYConfirmarExtension() {
    const nueva: IExtensionReserva = {
        id: 2,
        reservaId: 1004,
        nuevaFechaDevolucion: "2025-05-10",
        razonExtension: "Feriado largo",
    };

    const resultado = await guardarExtensionAsync(nueva);
    console.log("Extensión guardada:", resultado);
}

agregarYConfirmarExtension();
