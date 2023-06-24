import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany} from 'typeorm';
import { Tarea } from './tareas';

@Entity()
export class Usuario extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({nullable:true, type:'varchar'})
    name:string;

    @Column({unique:true, nullable:true})
    email:string;

    @Column({type:'varchar', nullable:true})
    password:string

    @OneToMany(()=> Tarea, tarea=>tarea.user)
    tarea:Tarea[]
}