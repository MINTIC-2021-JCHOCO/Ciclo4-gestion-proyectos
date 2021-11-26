import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProjecto, Enum_FaseProjecto, Enum_TipoObjetivo} from './models/enums';
import { ProjectModel } from './models/projects';
import { ObjectiveModel } from './models/objective';

// METODOLOGIA ONE TO MANY#1
const crearProyectoConObjetivos = async () => {
    const usuarioInicial = await UserModel.create({
        nombre: 'Karen',
        apellido: 'Ramirez',
        correo: 'kdra@gmail.com',
        identificacion: '1128',
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado,
    });
    const proyectoCreado = await ProjectModel.create({
        nombre: 'Proyecto Mintic',
        fechaInicio: new Date('2021/12/20'),
        fechaFin: new Date('2021/12/25'),
        presupuesto: 120000,
        lider: usuarioInicial._id,
    });
    const objectivoGeneral = await ObjectiveModel.create({
        descripcion: "Este es el objetivo general",
        tipo: Enum_TipoObjetivo.general,
        proyecto: proyectoCreado._id,
    });
    const objectivoEspecifico1 = await ObjectiveModel.create({
        descripcion: "Este es el objetivo especifico1",
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id,
    });
    const objectivoGeneral2 = await ObjectiveModel.create({
        descripcion: "Este es el objetivo especifico2",
        tipo: Enum_TipoObjetivo.especifico,
        proyecto: proyectoCreado._id,
    });
    console.log('proyecto creado', proyectoCreado);
};


// METODOLOGIA ONE TO MANY #3
const crearProyectoConObjetivos3 = async ()=>{
    const usuarioInicial = await UserModel.create({
        nombre: 'Caro',
        apellido: 'Ramirez',
        correo: 'nasjbhsa@gmail.com',
        identificacion: '1128',
        rol: Enum_Rol.administrador,
        estado: Enum_EstadoUsuario.autorizado,
    });
    const proyecto = await ProjectModel.create({
        nombre:'Proyecto 3',
        fechaInicio: Date.now(),
        fechaFin: new Date ('2022/11/12'),
        presupuesto: 250000,
        lider: usuarioInicial._id,
        objetivos:[
            {descripcion: 'Este es el objetivo general', tipo: Enum_TipoObjetivo.general},
            {descripcion: 'Este es el objetivo especifico1', tipo: Enum_TipoObjetivo.especifico},
            {descripcion: 'Este es el objetivo especifico2', tipo: Enum_TipoObjetivo.especifico},
        ],
    });
};

const main = async () =>{
    await conectarBD();

        const usuarioInicial = await UserModel.create({
            nombre: 'Karen',
            apellido: 'Ramirez',
            correo: 'kdra@gmail.com',
            identificacion: '1128',
            rol: Enum_Rol.administrador,
            estado: Enum_EstadoUsuario.autorizado,
        });
        const proyectoCreado = await ProjectModel.create({
            nombre: 'Proyecto Mintic',
            fechaInicio: new Date('2021/12/20'),
            fechaFin: new Date('2021/12/25'),
            presupuesto: 120000,
            lider: usuarioInicial._id,
        });
        const objectivoGeneral = await ObjectiveModel.create({
            descripcion: "Este es el objetivo general",
            tipo: Enum_TipoObjetivo.general,
            proyecto: proyectoCreado._id,
        });
        const objectivoEspecifico1 = await ObjectiveModel.create({
            descripcion: "Este es el objetivo especifico1",
            tipo: Enum_TipoObjetivo.especifico,
            proyecto: proyectoCreado._id,
        });
        const objectivoGeneral2 = await ObjectiveModel.create({
            descripcion: "Este es el objetivo especifico2",
            tipo: Enum_TipoObjetivo.especifico,
            proyecto: proyectoCreado._id,
        });
        console.log('proyecto creado', proyectoCreado); 
  

    // const liderproyecto = await ProjectModel.find()
    // console.log('Sus proyectos Liderados son', liderproyecto);
    
// const proyectoCreado = await ProjectModel.find({ id: '619f8f5b975b76c316bdf2f4'});
// console.log('proyecto', proyectoCreado);
    // console.log('el proyecto que encontré fue', proyecto);

    // const objetivos = await ObjectiveModel.find({project: '619f0472310394a3704722bb'});
    // console.log('Los objetivos del proyecto son', objetivos);

    // const proyectoConObjetivos = {... proyecto, objetivos:objetivos};
    // console.log('el proyecto con objetivos es: ', proyectoConObjetivos);
};
main();

// const main = async () =>{
//     await conectarBD();

//     const proyecto = await ProjectModel.findOne({ _id: '619f0472310394a3704722bb'});
//     console.log('el proyecto que encontré fue', proyecto);

//     const objetivos = await ObjectiveModel.find({project: '619f0472310394a3704722bb'});
//     console.log('Los objetivos del proyecto son', objetivos);

//     const proyectoConObjetivos = {... proyecto, objetivos:objetivos};
//     console.log('el proyecto con objetivos es: ', proyectoConObjetivos);
// };
// main();

    // const object = await ObjectiveModel.create({
    //     descripcion:'Este es el objetivo general',
    //     tipo: Enum_TipoObjetivo.general,
    // });
    // const proyecto = await ProjectModel.find({nombre: 'Proyecto 2'}).populate('lider');
    // console.log('El proyecto es: ', proyecto);
// CAMBIO DE ESTADO PROYECTO
    // await ProjectModel.findOneAndUpdate(
    // {nombre: 'Proyecto 2'},
    // {
    //     estado: Enum_EstadoProjecto.activo,
    // })
    // .then((p) => {
    // console.log('Cambio de estado correcto', p);
    // })
    // .catch((e)=>{
    // console.error('Error cambiando estado', e);
    // });    
// CREAR UN PROYECTO
    // await ProjectModel.create({
    //     nombre:'Proyecto 2',
    //     presupuesto: '3462',
    //     fechaInicio: Date.now(),
    //     fechaFin: new Date ('2022/11/12'),
    //     lider: '6195d9d4378ce5f3ec772dee',
    //     objetivos:[]
    // })
    // .then((p) => {
    // console.log('Proyecto creado', p);
    // })
    // .catch((e)=>{
    // console.error('Error creando el proyecto', e);
    // });
// CREAR UN USUARIO
    // await UserModel.create({
    //     apellido:'Alzate',
    //     correo: 'alzaj@jasjd.com',
    //     identificacion: '12',
    //     nombre: 'Andres',
    //     rol:Enum_Rol.administrador,
    //     estado: Enum_EstadoUsuario.autorizado
    // })
    //     .then((u) => {
    //     console.log('usuario creado', u);
    // })
    //     .catch((e)=>{
    //     console.error('Error creando el usuario', e);
    // });
    //EDITAR UN USUARIO
//     await UserModel.findOneAndUpdate(
//     { identificacion: '12'},
//     {
//         nombre:'Laura',
//         apellido: 'Velasquez',
//     }
// )
//     .then((u)=> {
//         console.log('usuario actualizado', u);
//     })
//     .catch((e)=> {
//         console.error('Error actualizando', e);
//     });

//CAMBIAR ESTADO
//     await UserModel.findOneAndUpdate(
//         {estado: Enum_EstadoUsuario.pendiente},
//         {estado: Enum_EstadoUsuario.autorizado}
// )
//     .then((u) =>{
//         console.log('Cambio de estado exitoso', u);
//     })
//     .catch((e)=>{
//         console.error('Cambio de estado NO exitoso', e)
//     });

// CRUD USUARIOS

// CREAR UN USUARIO
// await UserModel.create({
//     apellido:'Suarez',
//     correo: 'bakjsdjak@jasjd.com',
//     identificacion: '234',
//     nombre: 'fred',
//     rol:Enum_Rol.administrador,
// })
//     .then((u) => {
//     console.log('usuario creado', u);
// })
//     .catch((e)=>{
//     console.error('Error creando el usuario', e);
// });

//OBTENER LOS USUARIOS
// await UserModel.find()
//     .then((u) =>{
//         console.log('usuarios', u);
//     })
//     .catch((e)=>{
//         console.error('Error obteniendo los usuarios', e)
//     });

//EDITAR UN USUARIO
// await UserModel.findOneAndUpdate(
//     { correo: 'jyk@efr.com'},
//     {
//         nombre:'Laura',
//         apellido: 'Velasquez',
//     }
// )
//     .then((u)=> {
//         console.log('usuario actualizado', u);
//     })
//     .catch((e)=> {
//         console.error('Error actualizando', e);
//     });
//ELIMINAR UN USUARIO
// await UserModel.findOneAndDelete(
//     { correo: 'jyk@efr.com'},
//     {
//         nombre:'Laura',
//         apellido: 'Velasquez',
//     }
// )
//     .then((u)=> {
//         console.log('usuario eliminado', u);
//     })
//     .catch((e)=> {
//         console.error('Error eliminando', e);
//     });    