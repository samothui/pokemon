import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Input() pokemons: Array<Pokemon> = new Array<Pokemon>();

  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }


  public onEditClick(index: number) {
    this.onEdit.emit(index);
  }

}
