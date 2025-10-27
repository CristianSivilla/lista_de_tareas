import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Tarea from './models/tarea.model.js';

dotenv.config();

const app = express();
app.use(express.json()); 

app.post("/api/tareas", async (req, res) => {
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
});

app.delete("/api/tareas/:id", async (req, res) => {
    const {id} = req.params;
    console.log("id:", id);

    try {
        await Tarea.findByIdAndDelete(id);
        res.status(200).json({succes: true, message: "Product deleted"});

    } catch (error){
        console.log("no se ha podido eliminar la tarea", error)
    }
});

app.listen(5000, () => {
  connectDB();
  console.log('Servidor iniciado en http://localhost:5000');
});
