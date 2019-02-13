import { Component, OnInit } from '@angular/core';
import {Card} from '../../models/card';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CardsService} from '../../services/cards.service';

@Component({
  selector: 'app-featured-cards',
  templateUrl: './featured-cards.component.html',
  styleUrls: ['./featured-cards.component.scss']
})
export class FeaturedCardsComponent implements OnInit {

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

  ngOnInit() {
    this.onShowCards();
  }
}
