import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlService} from './url.service';
import {Card} from '../models/card';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: Card[] = [];

  loaded = new Observable(observer => {
    if (this.cards.length) {
      observer.next(this.cards);
    } else {
      this.http.get(this.urlService.getUrl('getCards')).subscribe((cards: Card[]) => {
        this.cards = cards;
        observer.next(this.cards);
      });
    }
  });

  getCards() {
    return this.loaded;
  }

  constructor(private http: HttpClient, private urlService: UrlService) {
  }
  saveCards(cards: Card[]) {
    return this.http.put(this.urlService.getUrl('saveCards'), cards);
  }
}
