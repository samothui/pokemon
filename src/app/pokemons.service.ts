import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.interface';
import { Subject } from 'rxjs';

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

  editPokemonEvent = new Subject<void>();

  addToEditList(pokemon) {
    this.pokemonsToBeEdited = pokemon;
    this.editPokemonEvent.next();
  }

  addToList(pokemonToBeAdded) {
    const pos = this.pokemons.findIndex((pokemon)=>{
      return pokemon.name === pokemonToBeAdded.name;
    })
    if (pos !== -1){
      // alert(pokemonToBeAdded.name + ' is already on the list! Use the edit function instead.');
      this.pokemons[pos] = pokemonToBeAdded;
      return;
    }
    this.pokemons.push(pokemonToBeAdded);
  }

  constructor() { }
}
