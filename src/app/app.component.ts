import { Component } from '@angular/core';
import { Pokemon } from './pokemon.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  pokemons: Array<Pokemon> = [<Pokemon>{
    name: "pikachu",
    type: "lightning",
    height: 30,
    weight: 23
  },
  <Pokemon>{
    name: "charizard",
    type: "fire",
    height: 230,
    weight: 120
  }];

  public onEditClicked(index: number) {
    alert(index)
  }

  public onAddClicked(pokemon: Pokemon) {
    this.pokemons.push(pokemon)
  }


}
