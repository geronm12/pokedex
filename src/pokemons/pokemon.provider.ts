import {Connection, Repository} from 'typeorm';
import {Pokemon} from './pokemon.entity';

export const pokemonProviders = [
    {
        provide: 'POKEMON_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Pokemon),
        inject: ['DATABASE_CONNECTION']
    }
];


