import express from 'express';
import { TareaControlles } from '../controllers/tareaControler';
const servicio = new TareaControlles();
export const routesTarea = express.Router();

routesTarea.get('/', async(req, res, next)=>{
    const data = await servicio.leerTarea();
    res.json(data);
});
routesTarea.post('/', async (req, res, next)=>{
    const data = await servicio.agregarTarea(req.body);
    res.json(data);
});

