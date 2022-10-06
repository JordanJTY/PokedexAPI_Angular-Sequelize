import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon } from '../interfaces/ipokemon';
import { PhotoService } from '../services/photo.service';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.page.html',
  styleUrls: ['./create-pokemon.page.scss'],
})
export class CreatePokemonPage implements OnInit {

  numpokemon: number = null;
  name: string;
  type1: string;
  type2: string = null;
  hp: number = null;
  attack: number = null;
  defense: number = null;
  sp_attack: number = null;
  sp_defense: number = null;
  speed: number = null;
  filename: string = null;
  capturedPhoto: string = "";

  constructor(private pokemonService: PokemonService, private router: Router, private photoService: PhotoService) { }

  ngOnInit() {
  }

  postPokemon(pokemon: IPokemon) {
    console.log(pokemon.hp + ' ' + pokemon.type1 + ' ' + pokemon.name);
    this.pokemonService.postPokemon(pokemon);
  }

  navigate() {
    this.router.navigate(['/home'])
  }

  takePhoto() {
    // DECOMMENT:
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    // DECOMMENT:
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    // DECOMMENT:
    this.capturedPhoto = null;
  }

  createPokemon() {
    let pokemon: IPokemon = {
      numpokemon: this.numpokemon,
      name: this.name,
      type1: this.type1,
      type2: this.type2,
      hp: this.hp,
      attack: this.attack,
      defense: this.defense,
      sp_attack: this.sp_attack,
      sp_defense: this.sp_defense,
      speed: this.speed,
      filename: this.filename
    }
    if (pokemon.name == null || pokemon.numpokemon == null || pokemon.type1 == null || pokemon.hp == null || pokemon.attack == null || pokemon.defense == null
      || pokemon.sp_attack == null || pokemon.sp_defense == null || pokemon.speed == null) {
      alert('You must fill all fields');
    } else {
      this.postPokemon(pokemon);
      this.navigate();
    }

  }

}
