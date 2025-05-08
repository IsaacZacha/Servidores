import {user} from './models/user'
import { AppDataSource } from './data-source'

export const InsertarUsuario = async(
        Nombre: String,
        email: String
)=>{
    const user1 = new user();
    user1.correo = email
    user1.nombre = Nombre
    return await AppDataSource.manager.save(user1)
}