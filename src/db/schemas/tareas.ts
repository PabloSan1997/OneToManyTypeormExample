import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity, OneToMany} from 'typeorm';
import { Usuario } from './usuarios';

@Entity()
export class Tarea extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({nullable:true, type:'varchar'})
    tarea:string;

    @Column({type:'boolean'})
    estado:boolean;

    @ManyToOne(()=>Usuario, (user)=>user.id)
    user:Usuario;

}