
import { AppDataSource } from "../db/config";
import { Tarea } from "../db/schemas/tareas";
import { Usuario } from "../db/schemas/usuarios";

export class TareaControlles{
    async agregarTarea(cuerpo:TareaReq){
        const tarea = new Tarea();
        tarea.estado=cuerpo.estado;
        tarea.tarea=cuerpo.tarea;
        const usuario = await Usuario.findBy({id:cuerpo.id_user});
        tarea.user=usuario[0];
        await AppDataSource.manager.save(tarea);
        return {message:'Segun dse pudo'}
    }
    async leerTarea(){
        const data = await Tarea.find();
        return data;
    }
}


type TareaReq = {
    tarea:string;
    estado:boolean;
    id_user:number
}
