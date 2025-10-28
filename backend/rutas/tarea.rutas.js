import express from "express";

const router = express.Router();
import mongoose from "mongoose";
import Tarea from '../modelos/tarea.model.js';
import { geTareas } from "../modelos/controlador.tarea.js";
import { posTarea } from "../modelos/controlador.tarea.js";
import { puTarea } from "../modelos/controlador.tarea.js";
import { delTarea } from "../modelos/controlador.tarea.js";

router.get("/", geTareas);
router.post("/", posTarea);
router.put("/:id",puTarea);
router.delete("/:id", delTarea);


export default router;