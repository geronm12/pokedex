import {Module} from '@nestjs/common';
import {DataBaseModule} from '../database/database.module';
import {pokemonProviders} from './pokemon.provider';
import {PokemonService} from './pokemon.service';


@Module({
    imports: [DataBaseModule],
    providers: [
        ...pokemonProviders,
        PokemonService
    ],
})

export class PokemonModule{}