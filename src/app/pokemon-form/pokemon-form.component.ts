import { Component } from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { PokemonsStorageService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {

  constructor (private pokeStorage: PokemonsStorageService) {}

  pokemons = <Pokemon>{};

  addPokemonToList(){
    this.pokeStorage.addToList(this.pokemons);
    this.pokemons = <Pokemon>{};
  }

}
