import {Connection, Repository} from 'typeorm';
import {Tipo} from './tipos.entity';



export const tipoProvider = [{
    provide: 'TIPO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Tipo),
    inject: 'DATABASE_CONNECTION'
}];