import { Component, OnInit} from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { PokemonsStorageService } from '../pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokeStorage: PokemonsStorageService,
              private router: Router) {  }

  ngOnInit(){
  }
  pokemons:Array<Pokemon> = this.pokeStorage.pokemons;

  editPokemon(pokemon){
    this.pokeStorage.addToEditList(pokemon);
    this.router.navigate(['form']);
    // alert(this.pokeStorage.pokemonsToBeEdited.name);
  }

  randomPoke(num){
    this.pokeStorage.addRandomPokemon(num);
    this.pokemons = this.pokeStorage.pokemons;
  }

  clear(){
    this.pokemons = [];
    this.pokeStorage.clear();
  }

}
