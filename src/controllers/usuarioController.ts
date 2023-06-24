import { Usuario } from "../db/schemas/usuarios";


export class UsuarioController{
    async leerUsuario():Promise<UsuarioRes[]>{
        const data = await Usuario.find({relations:{tarea:true}});
        return data;
    }
    
    async leerUnoUsuario(id:number):Promise<UsuarioRes>{
        const dato = await Usuario.findBy({id});
        if(dato.length>0){
            return dato[0];
        }
        throw 'hola';
    }
    async agregarUsuario(cuerpo:UsuarioReq){
        const {name, email, password} = cuerpo;
        const dato = new Usuario();
        dato.email = email;
        dato.name = name;
        dato.password = password;
        dato.save();
        return cuerpo;
    }
    async eliminarUsuario(id:number){
       const data = await Usuario.delete({id});
       return data;
    }
}

type UsuarioRes = {
    id:number;
    name:string;
    email:string;
    password:string
}

type UsuarioReq = {
    name:string;
    email:string;
    password:string
}