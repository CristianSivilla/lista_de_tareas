import {create} from "zustand";

export const usarAlmacenadoTareas = create((set) => ({

    tareas: [],
    setTareas: (tareas) => set ({tareas}),

}));