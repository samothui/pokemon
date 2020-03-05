import { Component} from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { PokemonsStorageService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  constructor(private pokeStorage: PokemonsStorageService) {  }

  pokemons:Array<Pokemon> = this.pokeStorage.pokemons;

  editPokemon(pokemon){
    this.pokeStorage.addToEditList(pokemon);
    // alert(this.pokeStorage.pokemonsToBeEdited.name);
  }

}
