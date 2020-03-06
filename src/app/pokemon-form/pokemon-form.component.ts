import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { PokemonsStorageService } from '../pokemons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit, OnDestroy {

  constructor (private pokeStorage: PokemonsStorageService) {}

  ngOnInit(){
    this.editSubscription = this.pokeStorage.editPokemonEvent.subscribe(
      () => {
        this.pokemons.name = this.pokeStorage.pokemonsToBeEdited.name;
        this.pokemons.type = this.pokeStorage.pokemonsToBeEdited.type;
        this.pokemons.weight = this.pokeStorage.pokemonsToBeEdited.weight;
        this.pokemons.height = this.pokeStorage.pokemonsToBeEdited.height;
        this.btnText = "Edit";
      });
  }

  ngOnDestroy() {
    this.editSubscription.unsubscribe;
  }

  pokemons = <Pokemon>{};
  editSubscription: Subscription;
  btnText = "Add";

  onSubmit(form){
    const newPokemon = {
      name: "",
      type: form.value.type,
      weight: form.value.weight,
      height: form.value.height
    }
    if (this.btnText === "Add") {
      newPokemon.name = form.value.name
    } else {
      newPokemon.name = this.pokeStorage.pokemonsToBeEdited.name;
    }
    this.pokeStorage.addToList(newPokemon);
    form.reset();
    this.btnText = "Add";
  }
}
