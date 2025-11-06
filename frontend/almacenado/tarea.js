import { useState } from "react";
import {create} from "zustand";
import crearTarea from "../src/paginas/CrearTarea";

export const usarAlmacenadoTareas = create((set) => ({

    tareas: [],
    setTareas: (tareas) => set ({tareas}),
    crearTarea: async (nuevaTarea) => {
        if(!nuevaTarea.nombre || !nuevaTarea.descripcion || !nuevaTarea.completado || !nuevaTarea.imagen){
            return {success:false, message:"Por favor rellena todos los campos"}
        }
        const res = await fetch ("/api/tareas", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(nuevaTarea)
        })
        const data = await res.json();
        set((state) => ({tareas:[...state.tareas,data.data]}))
        return {success:true, message:"Tarea creada correctamente"}

    }

}));

