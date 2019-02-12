import { Component } from '@angular/core';
import {CardsService} from './services/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private cardsService: CardsService) {}

  onAddCard() {
    this.cardsService.getCards().subscribe((data) => {
      console.log(data);
    });
  }
}
