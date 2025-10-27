import mongoose from "mongoose";

const tareaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        default: "",
        trim: true,
    },
    completado: {
        type: Boolean,
        default: false,
    },
},{
    timestamps: true
}
)

const Tarea = mongoose.model('Tarea', tareaSchema);

export default Tarea;