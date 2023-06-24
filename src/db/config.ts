import {DataSource} from 'typeorm';
import { Usuario } from './schemas/usuarios';
import { Tarea } from './schemas/tareas';
import 'dotenv/config';

export const AppDataSource = new DataSource({
    type:'postgres',
    host:process.env.DB_HOST,
    port:Number(process.env.PUERTO),
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATANAME,
    synchronize: true,
    logging: true,
    entities: [Usuario, Tarea],
    subscribers: [],
    migrations: [],
});

export function conectar(){
    AppDataSource.initialize()
    .then(()=>console.log('Conectado a la base de datos'))
    .catch(()=>console.log('Error con la base de datos'));
}