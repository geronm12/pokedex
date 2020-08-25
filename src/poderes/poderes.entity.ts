import  { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import {Tipo} from '../tipos/tipos.entity';

@Entity()
export class Poder {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 100})
    name: string;

    @Column()
    daño: number;

    @OneToMany(type => Tipo, tipo => tipo.poderes)
    tipo: Tipo;

}