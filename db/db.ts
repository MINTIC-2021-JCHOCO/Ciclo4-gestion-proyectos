import {connect} from 'mongoose';
// cons {connect} = required('mongoose');

const conectarBD = async()=>{
    return await connect(
        'mongodb+srv://admin:adminproyectos@gestionproyectosmisiont.xv2xr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
        .then(() => {
            console.log('Conexion exitosa');
        })  
        .catch((e)=>{
            console.error('Error conectando a la BD', e);
        });
};

export default conectarBD