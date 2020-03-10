import { Component, OnInit} from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { PokemonsStorageService } from '../pokemons.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokedexComponent } from '../pokedex/pokedex.component';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  constructor(private pokeStorage: PokemonsStorageService,
              private router: Router,
              private modalService: NgbModal) {  }

  ngOnInit(){
  }
  pokemons:Array<Pokemon> = this.pokeStorage.pokemons;

  openPokedex(pokemon) {
    console.log('list');
    this.pokeStorage.addToPokedex(pokemon)
    .subscribe(
      (Response:any) =>{
        let pokePokedex = {
          name:Response.name,
          type:Response.types[0].type.name,
          order:Response.order,
          weight:Response.weight / 10,
          height:Response.height / 10,
          img: Response.sprites.front_default,
          stSpeed: Response.stats[0].base_stat,
          stSPDef: Response.stats[1].base_stat,
          stSPAtt: Response.stats[2].base_stat,
          stDef: Response.stats[3].base_stat,
          stAtt: Response.stats[4].base_stat,
          stHP: Response.stats[5].base_stat,
          ability: Response.abilities[0].ability.name,
          abilityDesc: ''
        }
        this.pokeStorage.callAbility(pokePokedex.ability)
        .subscribe(
          (Response:any) =>{
            pokePokedex.abilityDesc = Response.effect_entries[0].effect;
            this.pokeStorage.pokemonsPokedex=pokePokedex;
        console.log(this.pokeStorage.pokemonsPokedex);
        const modalRef = this.modalService.open(PokedexComponent, { size: 'lg' });
          }
        );

      }
    );

    // modalRef.componentInstance.name = 'World';
  }

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
