import { Injectable } from '@angular/core';
import { Pokemon, Pokedex } from './pokemon.interface';
import { Subject } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
import { TitleCasePipe, LowerCasePipe } from '@angular/common';
import { map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PokemonsStorageService {

  constructor (
    private http: HttpClient,
    private titlecase: TitleCasePipe,
    private lowercase: LowerCasePipe){}

  pokemons:Array<Pokemon> = []
  pokemonsToBeEdited: Pokemon;
  pokemonsPokedex= <Pokedex>{};
  editPokemonEvent = new Subject<void>();
  editMode = false;

  addRandomPokemon(numRepeats){
    for (let i = 0; i<= numRepeats; i++){
      this.http.get('https://pokeapi.co/api/v2/pokemon/'+Math.floor(Math.random()*(151-1)+1)).subscribe(
        (Response:any) =>{
          let newPokemon = {
            name: this.titlecase.transform(Response.name),
            type: this.titlecase.transform(Response.types[0].type.name),
            weight: Response.weight / 10,
            height: Response.height / 10,
            img: Response.sprites.front_default
          }
          this.addToList(newPokemon);
        }
      )
    }
  }

  callAbility(abilityName){
    return this.http.get('https://pokeapi.co/api/v2/ability/'+abilityName);
  }

  getImage(pokemonName){
    let lowerName = this.lowercase.transform(pokemonName);
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+lowerName);}

  addToEditList(pokemon) {
    this.pokemonsToBeEdited = pokemon;
    this.editMode = true;
    // this.editPokemonEvent.next();
  }

  addToPokedex(pokemon) {
    let lowerName = this.lowercase.transform(pokemon.name);
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+lowerName);
  }

  addToList(pokemonToBeAdded) {
    const pos = this.pokemons.findIndex((pokemon)=>{
      return pokemon.name === pokemonToBeAdded.name;
    })
    if (pos !== -1){
      this.pokemons[pos] = pokemonToBeAdded;
      return;
    }
    this.pokemons.push(pokemonToBeAdded);
  }

  clear(){
    this.pokemons = [];
  }


}
