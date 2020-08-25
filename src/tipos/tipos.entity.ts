import  { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {Poder} from '../poderes/poderes.entity'; 

@Entity()
export class Tipo  {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @ManyToOne(type => Poder, poder => poder.tipo)
    poderes: Poder[]
}