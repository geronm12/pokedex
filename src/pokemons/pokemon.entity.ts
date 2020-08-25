import  { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import {Tipo} from '../tipos/tipos.entity';
 

@Entity()
export class Pokemon  {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @ManyToMany(type => Tipo)
    @JoinTable()
    tipos: Tipo[];
}