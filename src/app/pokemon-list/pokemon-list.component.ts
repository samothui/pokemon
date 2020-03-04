import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  @Input() pokemons:Pokemon;

  @Output() editPokemonEvent = new EventEmitter<Pokemon>();

  editPokemonEmit(index){
    this.editPokemonEvent.emit(index);
  }


}
