import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { IPokemon } from '../interfaces/ipokemon';
import { PhotoService } from '../services/photo.service';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() id: number;
  pokemon: IPokemon;
  editable: boolean;
  capturedPhoto: string = "";

  constructor(private modalCtrl: ModalController, private pokemonService: PokemonService, private activatedRoute: ActivatedRoute, private router: Router, private photoService: PhotoService) {
    this.editable = true;
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.getPokemon(id);
  }

  getPokemon(id: number) {
    this.pokemonService.getPokemon(id).subscribe(data => {
      this.pokemon = data;
      console.log(this.pokemon.numpokemon)
    });
  }

  deletePokemon(id: number) {
    console.log('Id return: ' + id);
    this.pokemonService.deletePokemon(id);
    this.navigate();
  }

  navigate() {
    this.router.navigate(['/home'])
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = null;
  }

  async update() {
    const id = this.activatedRoute.snapshot.params.id;
    if (this.editable === true) {
      document.querySelectorAll('.dataBox').forEach(x => {
        x.setAttribute("readonly", "false");
      });
      this.editable = false;
    } else {
      document.querySelectorAll('.dataBox').forEach(x => {
        x.setAttribute("readonly", "true");
      });
      if (this.pokemon.hp == null || this.pokemon.attack == null || this.pokemon.defense == null
        || this.pokemon.sp_attack == null || this.pokemon.sp_defense == null || this.pokemon.speed == null) {
        alert('You must fill all fields');
        document.querySelectorAll('.dataBox').forEach(x => {
          x.setAttribute("readonly", "false");
        });
      } else {
        let blob = null;
        if (this.capturedPhoto != "") {
          const response = await fetch(this.capturedPhoto);
          blob = await response.blob();
        }
        this.pokemonService.putPokemon(this.pokemon, id, blob);
        this.editable = true;
        this.navigate();
      }
    }
  }
}

