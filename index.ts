import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol } from './models/enums';

const main = async () =>{
    await conectarBD();

    // CREAR UN USUARIO
    await UserModel.create({
        apellido:'Suarez',
        correo: 'jnshbd@kk.com',
        identificacion: '908776',
        nombre: 'Jorge',
        rol:Enum_Rol.administrador,
    })
        .then((u) => {
        console.log('usuario creado', u);
    })
        .catch((e)=>{
        console.error('Error creando el usuario', e);
    });

    //OBTENER LOS USUARIOS
    // await UserModel.find()
    //     .then((u) =>{
    //         console.log('usuarios', u);
    //     })
    //     .catch((e)=>{
    //         console.error('Error obteniendo los usuarios', e)
    //     });
};
main();

