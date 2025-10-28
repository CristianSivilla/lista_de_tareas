import mongoose from 'mongoose';
import Tarea from '../modelos/tarea.model.js';


export const geTareas = async(req, res) =>{
  try{
    const tareas = await Tarea.find({});
    res.status(200).json({success:true, data:tareas})
  }catch(error) {
    console.log("Error al mostrar los productos", error.message);
    res.status(500).json({success: false, message: "Server Error"});
  }

}

export const posTarea = async (req, res) => {
  const tarea = req.body;

  if (!tarea.nombre || !tarea.descripcion || tarea.completado === undefined) {
    return res.status(400).json({ success: false, message: "Por favor rellena todos los campos" });
  }

  const nuevaTarea = new Tarea(tarea);

  try {
    await nuevaTarea.save();
    res.status(201).json({ success: true, data: nuevaTarea });
  } catch (error) {
    console.error("Error al crear la tarea:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const puTarea = async (req, res) => {
  const {id} = req.params;
  const tarea = req.body;
  
  try{
   const tareActulizada = await Tarea.findByIdAndUpdate(id, tarea, {new: true});
   res.status(200).json({succes:true, data: tareActulizada});
  }catch(error){
  res.status(500).json({succes: false, message: "Server Error"});

  }

}

export const  delTarea = async (req, res) => {
    const { id } = req.params;
    console.log("id:", id);

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({succes:false, message:"Id no valido"});
    }
    try {
        const deleted = await Tarea.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ success: false, message: "Tarea no encontrada" });
        }

        res.status(200).json({ success: true, message: "Tarea eliminada correctamente" });
    } catch (error) {
        console.error("No se ha podido eliminar la tarea:", error);
        res.status(500).json({ success: false, message: "Error al eliminar la tarea" });
    }
}