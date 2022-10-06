import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { ModalPage } from 'src/app/modal/modal.page';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-poke-cards',
  templateUrl: './poke-cards.component.html',
  styleUrls: ['./poke-cards.component.scss'],
})
export class PokeCardsComponent implements OnInit {

  @Input() idpoke: number;
  @Input() numpokemon: number;
  @Input() name: string;
  @Input() type1: string;
  @Input() type2: string;

  constructor() { }

  ngOnInit() {}

}
