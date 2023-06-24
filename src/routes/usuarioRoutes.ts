import express from 'express';
import { UsuarioController } from '../controllers/usuarioController';

const servicio = new UsuarioController();

export const routesUser = express.Router();

routesUser.get('/', async(req, res, next)=>{
    const data = await servicio.leerUsuario();
    res.json(data);
});
routesUser.get('/:id', async(req, res, next)=>{
    const data = await servicio.leerUnoUsuario(parseInt(req.params.id));
    res.json(data);
});
routesUser.post('/', async(req, res, next)=>{
    const data = await servicio.agregarUsuario(req.body);
    res.json(data);
});
routesUser.delete('/:id', async(req, res, next)=>{
    const data = await servicio.eliminarUsuario(parseInt(req.params.id));
    res.json(data);
});