import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePokemonPageRoutingModule } from './create-pokemon-routing.module';

import { CreatePokemonPage } from './create-pokemon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePokemonPageRoutingModule
  ],
  declarations: [CreatePokemonPage]
})
export class CreatePokemonPageModule {}
