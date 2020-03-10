import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonsStorageService } from './pokemons.service';
import { HttpClientModule} from '@angular/common/http'
import { TitleCasePipe, LowerCasePipe } from '@angular/common';
import { PokemonHomeComponent } from './pokemon-home/pokemon-home.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalComponent } from './ngb-modal/ngb-modal.component';
import { PokedexComponent } from './pokedex/pokedex.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonFormComponent,
    PokemonHomeComponent,
    ModalComponent,
    NgbModalComponent,
    PokedexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [PokemonsStorageService, TitleCasePipe, LowerCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
