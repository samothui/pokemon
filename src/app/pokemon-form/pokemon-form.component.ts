import { Component, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent { //implements OnChanges


  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes["pokemon"]) {
  //     if (!this.pokemon) {
  //       this.pokemon = <Pokemon>{};
  //       this.pokemon.name = "";
  //       this.pokemon.type = "";
  //       this.pokemon.weight = 0;
  //       this.pokemon.height = 0;
  //     }
  //     else {
  //       this.isEditMode = true;
  //     }

  //   }
  // }

  @Input() pokemons = <Pokemon>{};

  @Output() addedPokemon = new EventEmitter<Pokemon>();

  emitPokemonData(){
    this.addedPokemon.emit(this.pokemons);
    this.pokemons = <Pokemon>{};
  }

  updateEditPokemon(pokeData){
    this.pokemons=pokeData;
    alert(pokeData);
  }
}
