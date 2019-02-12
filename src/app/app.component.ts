import { Card } from './models/card';
import {Component, OnInit} from '@angular/core';
import {CardsService} from './services/cards.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cards: Card[] = [];

  newCardForm = new FormGroup({
    cardName: new FormControl('', Validators.required),
    cardDescription: new FormControl('', Validators.required),
    cardPhotoUrl: new FormControl('', Validators.required)
  });

  constructor(private cardsService: CardsService) {
  }

  onShowCards() {
    this.cardsService.getCards().subscribe((response: Card[]) => {
      this.cards = response;
    });
  }

  onNewCardFormSubmit() {
    const cardData = {
      name: this.newCardForm.value.cardName,
      description: this.newCardForm.value.cardDescription,
      photoUrl: this.newCardForm.value.cardPhotoUrl
    };

    this.cards.push(new Card(cardData.name, cardData.description, cardData.photoUrl));
  }

  onSaveCards() {
    this.cardsService.saveCards(this.cards).subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit() {
  }
}
