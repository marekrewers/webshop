import { Component, OnInit } from '@angular/core';
import {Card} from '../../../models/card';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CardsService} from '../../../services/cards.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})
export class AddCardComponent implements OnInit {

  cards: Card[] = [];
  newCard: any;

  newCardForm = new FormGroup({
    cardName: new FormControl('', Validators.required),
    cardDescription: new FormControl('', Validators.required),
    cardPhotoUrl: new FormControl('', Validators.required)
  });

  constructor(private cardsService: CardsService) {
  }

  onNewCardFormSubmit() {
    const cardData = {
      name: this.newCardForm.value.cardName,
      description: this.newCardForm.value.cardDescription,
      photoUrl: this.newCardForm.value.cardPhotoUrl
    };

    this.newCard = new Card(cardData.name, cardData.description, cardData.photoUrl);
    this.cards.push(this.newCard);
    this.cardsService.saveCards(this.cards).subscribe();
  }

  ngOnInit(): void {
    this.cardsService.getCards().subscribe((cards: Card[]) => {
      this.cards = cards;
    });
  }
}
