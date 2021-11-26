import { Schema, model, SchemaTypes } from "mongoose";
import { Enum_EstadoProjecto, Enum_FaseProjecto, Enum_TipoObjetivo } from "./enums";
import { ObjectiveModel } from "./objective";
import { UserModel } from "./user";

interface Proyecto{
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoProjecto;
    fase: Enum_FaseProjecto;
    lider: Schema.Types.ObjectId;
    objetivos: [Schema.Types.ObjectId];
    // objetivos: [{descripcion: String; tipo: Enum_TipoObjetivo}];
}

const projectSchema = new Schema<Proyecto>({
    nombre:{
        type: String,
        required: true,

    },
    presupuesto:{
        type: Number,
        required: true,
    },
    fechaInicio:{
        type: Date,
        required: true,
    },
    fechaFin:{
        type: Date,
        required: true,
    },
    estado:{
        type: String,
        enum: Enum_EstadoProjecto,
        default: Enum_EstadoProjecto.inactivo,
    },
    fase:{
        type: String,
        enum: Enum_FaseProjecto,
        default: Enum_FaseProjecto.nula,
    },
    lider: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel,
    },
    objetivos:[
    //     {
    //         descripcion: {
    //             type: String,
    //             required: true,
    //         },
    //         tipo: {
    //             type: String,
    //             enum: Enum_TipoObjetivo,
    //             required: true,
    //         }
    //     }
    // ]
        {
            type:Schema.Types.ObjectId,
            ref: ObjectiveModel,
        },
    ],
    
});

const ProjectModel = model("Proyecto", projectSchema);

export {ProjectModel};