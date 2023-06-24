import express,{Express, Router} from 'express';
import { routesTarea } from './tareasRouter';
import { routesUser } from './usuarioRoutes';
const routeIndex:Router = express.Router();

export function crearApi(app:Express){
    app.use('/api/v1', routeIndex);
    routeIndex.use('/tareas', routesTarea);
    routeIndex.use('/usuario', routesUser);
}