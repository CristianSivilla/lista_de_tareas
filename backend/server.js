import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import tareaRutas from "./rutas/tarea.rutas.js";

dotenv.config();

const app = express();
app.use(express.json()); 
app.use("/api/tareas",tareaRutas);

app.listen(5000, () => {
  connectDB();
  console.log('Servidor iniciado en http://localhost:5000');
});
