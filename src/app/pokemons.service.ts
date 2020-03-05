import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonsStorageService {

  pokemons:Array<Pokemon> = [
    <Pokemon>{name: 'Pikachu', type: 'Electric', weight: 200, height: 100},
    <Pokemon>{name: 'Ditto', type: 'Normal', weight: 50, height: 50},
    <Pokemon>{name: 'Tentacool', type: 'Water', weight: 500, height: 250},
  ];

  pokemonsToBeEdited: Pokemon;

  addToEditList(pokemon) {
    this.pokemonsToBeEdited = pokemon;
    // alert(this.pokemonsToBeEdited.name);
  }

  addToList(pokemon) {
    this.pokemons.push(pokemon);
  }

  constructor() { }
}
