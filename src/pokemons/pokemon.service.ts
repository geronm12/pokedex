import {Inject, Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {Pokemon} from './pokemon.entity';
import {PokemonDto} from './Dto/pokemon.dto';


@Injectable()
export class PokemonService {
    
    constructor(@Inject('POKEMON_REPOSITORY') private pokemonRepository: Repository<Pokemon>) { }



}
