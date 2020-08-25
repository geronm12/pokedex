import {Connection, Repository} from 'typeorm';
import {Poder} from './poderes.entity';

export const poderProvider = [
    {
        provide: 'PODER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Poder),
        inject: ['DATABASE_CONNECTION']
    }
];


