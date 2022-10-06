import { Component } from '@angular/core';
import { IPokemon } from 'src/app/interfaces/ipokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemon: Array<IPokemon> = [];
  searchPoke: string;

  constructor(private pokemonService: PokemonService) {
    this.getAllPokemons();
  }

  ionViewDidEnter(){
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokemonService.getAllPokemons().subscribe(data => {
      this.pokemon = data;
    });
  }
}
