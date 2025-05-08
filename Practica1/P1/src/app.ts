import {InsertarUsuario } from './crud'
import { iniciar } from './database'

async function main( ) {
    await iniciar()
    const isaac = await InsertarUsuario(
        "Isaac", "IsaacZachararias@gmail.com"
    )
    console.log(isaac)
}
main()