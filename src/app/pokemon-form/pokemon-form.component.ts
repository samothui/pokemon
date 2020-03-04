import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../pokemon.interface';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["pokemon"]) {
      if (!this.pokemon) {
        this.pokemon = <Pokemon>{};
        this.pokemon.name = "";
        this.pokemon.type = "";
        this.pokemon.weight = 0;
        this.pokemon.height = 0;
      }
      else {
        this.isEditMode = true;
      }

    }
  }

  @Input() pokemon: Pokemon = <Pokemon>{};
  @Output() onAdd: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
  @Output() onEdit: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();
  isEditMode: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  onAddClick() {
    this.onAdd.emit(this.pokemon);
    this.pokemon = <Pokemon>{};
  }
}
