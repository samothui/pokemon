import { Component, Output, EventEmitter } from '@angular/core';
import { Pokemon } from './pokemon.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Evidenta Pokemonilor';

  @Output() pokemonToBeEdited = new EventEmitter<Pokemon>();

  pokemons:Array<Pokemon> = [
    <Pokemon>{name: 'Pikachu', type: 'Electric', weight: 200, height: 100},
    <Pokemon>{name: 'Ditto', type: 'Normal', weight: 50, height: 50},
    <Pokemon>{name: 'Tentacool', type: 'Water', weight: 500, height: 250},
  ];

  pokemonsToEdit = <Pokemon>{};

  updateEditPokemon(index){
    this.pokemonsToEdit = this.pokemons[index];
    // alert(this.pokemonsToEdit.type);
    this.pokemonToBeEdited.emit(this.pokemonsToEdit);

  }
  pushPokemon(pokemon) {
    this.pokemons.push(pokemon);
  }
}
